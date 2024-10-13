const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { protect } = require('../middleware/auth');

// Create Booking (Only for authenticated users)
router.post('/create', protect, async (req, res) => {
  const { 
    pickup, 
    dropoff, 
    vehicle, 
    date, 
    time, 
    goods, 
    weight, 
    volume, 
    specialInstructions, 
    price 
  } = req.body;

  try {
    const booking = new Booking({
      user: req.user._id,
      pickupLocation: pickup,
      dropoffLocation: dropoff,
      vehicleType: vehicle,
      scheduledDate: new Date(`${date}T${time}`),
      goodsDescription: goods,
      weight,
      volume,
      specialInstructions,
      priceEstimate: price,
      status: 'pending'
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
});

// Get all bookings for a user
router.get('/user', protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    res.status(500).json({ message: 'Error fetching bookings', error: error.message });
  }
});

// Get a specific booking
router.get('/:id', protect, async (req, res) => {
  try {
    const booking = await Booking.findOne({ _id: req.params.id, user: req.user._id });
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ message: 'Error fetching booking', error: error.message });
  }
});

// Update a booking (e.g., cancel)
router.put('/:id', protect, async (req, res) => {
  try {
    const booking = await Booking.findOne({ _id: req.params.id, user: req.user._id });
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    if (booking.status !== 'pending') {
      return res.status(400).json({ message: 'Cannot modify a non-pending booking' });
    }

    // Only allow updating status for now (e.g., to 'cancelled')
    if (req.body.status) {
      booking.status = req.body.status;
    }

    await booking.save();
    res.json(booking);
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ message: 'Error updating booking', error: error.message });
  }
});

module.exports = router;