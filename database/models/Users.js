const mongoose = require('mongoose');

// Define a schema for User
const userSchema = new mongoose.Schema({
    name: String,
    role: String,
    description: String,
    reservations: [
        {
            seatNo: String,
            computerLab: String,
            dateOfRequest: String,
            timeOfRequest: String,
            dateOfReservation: String,
            timeOfReservation: String
        }
    ]
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User; // Export the User model
