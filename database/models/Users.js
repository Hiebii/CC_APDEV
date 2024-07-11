const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    email: String,
    fullName: String,
    description: String,
    title: String,
    password: String,
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

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;

