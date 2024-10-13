const express = require('express')
const router = express.Router()
const User = require('../models/User')
const generateToken = require('../utils/generateToken')

// Register User
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body
  try {
    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const user = new User({ name, email, password })
    await user.save()

    // Send back JWT token after successful registration
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Login User
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ email })
      if (!user || !(await user.matchPassword(password))) {
        return res.status(401).json({ message: 'Invalid email or password' })
      }
  
      // Send JWT token if login is successful
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

module.exports = router

