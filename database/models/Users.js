const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    email: String,
    fullName: String,
    description: String,
    title: String,
    password: String,
    reservedRoom: String
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;

