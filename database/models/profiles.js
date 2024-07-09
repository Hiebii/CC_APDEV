const mongoose = require('mongoose');

// Define a schema for profile
const profileSchema = new mongoose.Schema({
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
const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile; // Export the User model
