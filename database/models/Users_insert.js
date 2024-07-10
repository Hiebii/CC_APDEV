const mongoose = require('mongoose');
const Users = require('./Users'); // Ensure the path is correct

mongoose.connect('mongodb://localhost:27017/tinkerlab', { useNewUrlParser: true, useUnifiedTopology: true });

// run this in cmd (e.g node profiles_insert)

const sampleUsers = [
    {
        email: "alice_johnson@dlsu.edu.ph",
        fullName: "Alice Johnson",
        description: "A diligent computer science student.",
        title: "Student",
        password: "password1",
        reservedRoom: "AG101"
    },
    {
        email: "bob_smith@dlsu.edu.ph",
        fullName: "Bob Smith",
        description: "Responsible for maintaining lab equipment.",
        title: "Student",
        password: "password2",
        reservedRoom: "VL101"
    },
    {
        email: "carol.williams@dlsu.edu.ph",
        fullName: "Carol Williams",
        description: "Lab technician with expertise in molecular biology and genetics.",
        title: "Lab Technician",
        password: "password3",
        reservedRoom: "GK101"
    },
    {
        email: "david_brown@dlsu.edu.ph",
        fullName: "David Brown",
        description: "Dedicated student focused on environmental science and sustainability.",
        title: "Student",
        password: "password4",
        reservedRoom: "AG102"
    },
    {
        email: "eve.jones@dlsu.edu.ph",
        fullName: "Eve Jones",
        description: "Experienced lab technician specializing in chemical analysis.",
        title: "Lab Technician",
        password: "password5",
        reservedRoom: "VL102"
    }
];

Users.insertMany(sampleUsers)
  .then(() => {
    console.log('Sample users inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting sample users: ', err);
  });