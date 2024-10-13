const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const bookingRoutes = require('./routes/bookings')
const driverRoutes = require('./routes/drivers')
const userRoutes = require('./routes/users')
const socketIo = require('socket.io')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Use routes
app.use('/bookings', bookingRoutes)
app.use('/drivers', driverRoutes)
app.use('/users', userRoutes)

const server = http.createServer(app)
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
})

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))


io.on('connection', (socket) => {
  console.log('New client connected')

  // Listen for driver's location updates
  socket.on('locationUpdate', (data) => {
    io.emit('trackLocation', data) // Broadcast location to users tracking the driver
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
})

server.listen(port, () => console.log(`Server running on port ${port}`))
