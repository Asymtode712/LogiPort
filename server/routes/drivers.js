const express = require('express')
const router = express.Router()
const Driver = require('../models/Driver')
const generateToken = require('../utils/generateToken')

// Register Driver
router.post('/register', async (req, res) => {
  const { name, vehicleType, password, location } = req.body
  try {
    const driverExists = await Driver.findOne({ name })
    if (driverExists) {
      return res.status(400).json({ message: 'Driver already exists' })
    }

    const driver = new Driver({ name, vehicleType, password, location })
    await driver.save()

    // Send back JWT token after successful registration
    res.status(201).json({
      _id: driver._id,
      name: driver.name,
      vehicleType: driver.vehicleType,
      token: generateToken(driver._id)
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Login Driver
router.post('/login', async (req, res) => {
    const { name, password } = req.body
    try {
      const driver = await Driver.findOne({ name })
      if (!driver || !(await driver.matchPassword(password))) {
        return res.status(401).json({ message: 'Invalid driver name or password' })
      }
  
      // Send JWT token if login is successful
      res.json({
        _id: driver._id,
        name: driver.name,
        vehicleType: driver.vehicleType,
        token: generateToken(driver._id)
      })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

module.exports = router