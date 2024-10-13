const express = require('express')
const router = express.Router()
const Booking = require('../models/Booking')
const { protect } = require('../middleware/auth')

// Create Booking (Only for authenticated users)
router.post('/create', protect, async (req, res) => {
  const { pickupLocation, dropoffLocation, vehicleType, priceEstimate } = req.body
  try {
    const booking = new Booking({
      user: req.user._id,  // Use authenticated user's ID
      pickupLocation,
      dropoffLocation,
      vehicleType,
      priceEstimate
    })
    await booking.save()
    res.status(201).json(booking)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router