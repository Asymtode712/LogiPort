const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
  pickupLocation: { type: String, required: true },
  dropoffLocation: { type: String, required: true },
  vehicleType: { type: String, required: true },
  scheduledDate: { type: Date, required: true },
  goodsDescription: { type: String, required: true },
  weight: { type: Number, required: true },
  volume: { type: Number, required: true },
  specialInstructions: { type: String },
  status: { type: String, default: 'pending', enum: ['pending', 'accepted', 'completed', 'cancelled'] },
  priceEstimate: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);