const mongoose = require('mongoose');
const Users = require('./Users'); // Ensure the path is correct

mongoose.connect('mongodb://localhost:27017/tinkerlab', { useNewUrlParser: true, useUnifiedTopology: true });

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
    email: "stephen_go@dlsu.edu.ph",
    fullName: "Stephen Go",
    description: "God-fearing and string-willed human being.",
    title: "Student",
    password: "password4",
    profilePhoto: "/images/stephen.png",
  },
  {
    email: "japeth_aguilar@dlsu.edu.ph",
    fullName: "Japeth Aguilar",
    description: "Interested in any sports, especially basketball.",
    title: "Student",
    password: "password5",
    profilePhoto: "/images/japeth.png",
  },
  {
    email: "marie_espiritu@dlsu.edu.ph",
    fullName: "Marie Espiritu",
    description: "Alway striving for Gold.",
    title: "Student",
    password: "password6",
    profilePhoto: "/images/marie.png",
  },
  {
    email: "claudette_escobar@dlsu.edu.ph",
    fullName: "Claudette Escobar",
    description: "Invulnerable to stress and anxiety.",
    title: "Student",
    password: "password7",
    profilePhoto: "/images/claudette.png",
  },
  {
    email: "irina.solarez@dlsu.edu.ph",
    fullName: "Irina Solarez",
    description: "Lab technician with expertise in molecular biology and genetics.",
    title: "Lab Technician",
    password: "password8",
    profilePhoto: "/images/irina.png",
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