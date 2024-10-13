const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    vehicleType: { type: String, required: true },
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    },
    available: { type: Boolean, default: true },
    status: { type: String, default: 'idle' }, // idle, enroute, busy
    password: { type: String, required: true },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
  }, {timestamps: true})
  
  driverSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next()
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  })
  
  driverSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
  }
  
  module.exports = mongoose.model('Driver', driverSchema)
  