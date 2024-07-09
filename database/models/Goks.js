const mongoose = require('mongoose')

const GoksSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    image: String
})

const Goks = mongoose.model('Goks', GoksSchema)

module.exports = Goks

