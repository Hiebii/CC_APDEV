const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    time: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    anonymous: {
      type: Number,
      required: true
    }
  });

const AndrewSchema = new mongoose.Schema({
    seat: {
        type: String,
        required: true
      },
      reservations: [reservationSchema]
})

const Andrew = mongoose.model('Andrew', AndrewSchema)

module.exports = Andrew
