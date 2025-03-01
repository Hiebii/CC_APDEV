const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
   dateofrequest: {
      type: String,
      required: true
    },
    timeofrequest: {
      type: String,
      required: true
    },
    dateofreservation: {
      type: String,
      required: true
    },
    timeofreservation: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    reservedby: {
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

const GoksSchema = new mongoose.Schema({
    seat: {
        type: String,
        required: true
      },
      reservations: [reservationSchema]
}, {versionKey: false});

const Goks = mongoose.model('Goks', GoksSchema)

module.exports = Goks
