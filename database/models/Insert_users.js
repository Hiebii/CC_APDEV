const mongoose = require('mongoose');
const Users = require('./Users'); // Ensure the path is correct

mongoose.connect('mongodb+srv://johnfredricktario:password_12@tinkerlab.mbh0jj9.mongodb.net/Tinkerlab?retryWrites=true&w=majority&appName=Tinkerlab');

// run this in cmd to put the data on mongodb (e.g node Insert_users.js)

const sampleUsers = [
  {
    email: "mari_santos@dlsu.edu.ph",
    fullName: "Mari Santos",
    description: "A diligent computer science student.",
    title: "Student",
    password: "password1",
    profilePhoto: "/images/mari.png",
  },
  {
    email: "carlos_bautista@dlsu.edu.ph",
    fullName: "Carlos Bautista",
    description: "Responsible for maintaining lab equipment.",
    title: "Student",
    password: "password2",
    profilePhoto: "/images/carlos.png",
  },
  {
    email: "andres_hidalgo@dlsu.edu.ph",
    fullName: "Andres Hidalgo",
    description: "Dedicated student focused on environmental science and sustainability.",
    title: "Student",
    password: "password3",
    profilePhoto: "/images/andres.png",
  },
  {
      email: "eli.lopez@dlsu.edu.ph",
      fullName: "Eli Lopez",
      description: "Experienced lab technician specializing in chemical analysis.",
      title: "Lab Technician",
      password: "password9",
      profilePhoto: "/images/eli.png",
  },
  {
    email: "irish_sabelina@dlsu.edu.ph",
    fullName: "Irish Sabelina",
    description: "Expert in the field of networking.",
    title: "Lab Technician",
    password: "password10",
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