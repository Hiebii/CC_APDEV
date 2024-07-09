const mongoose = require('mongoose')

const RoomsSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    image: String
})

const Rooms = mongoose.model('Rooms', RoomsSchema)

module.exports = Rooms

