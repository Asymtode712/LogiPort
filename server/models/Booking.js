const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
    pickupLocation: { lat: Number, lng: Number },
    dropoffLocation: { lat: Number, lng: Number },
    vehicleType: { type: String, required: true },
    status: { type: String, default: 'pending' }, // pending, accepted, completed
    priceEstimate: { type: Number, required: true }
  }, {timestamps: true})
  
  module.exports = mongoose.model('Booking', bookingSchema)
  