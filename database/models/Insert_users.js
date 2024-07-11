const mongoose = require('mongoose');
const Users = require('./Users'); // Ensure the path is correct

mongoose.connect('mongodb://localhost:27017/tinkerlab', { useNewUrlParser: true, useUnifiedTopology: true });

// run this in cmd to put the data on mongodb (e.g node Users_insert.js)

const sampleUsers = [
  {
      email: "mari_santos@dlsu.edu.ph",
      fullName: "Mari Santos",
      description: "A diligent computer science student.",
      title: "Student",
      password: "password1",
      profilePhoto: "/images/mari.png",
      reservations: [
          {
            seatNo: "A01",
            computerLab: "AG101",
            dateOfRequest: "2024-07-01",
            timeOfRequest: "09:00 AM",
            dateOfReservation: "2024-07-02",
            timeOfReservation: "7:30AM-8:00AM"
          }
      ]
  },
  {
      email: "carlos_bautista@dlsu.edu.ph",
      fullName: "Carlos Bautista",
      description: "Responsible for maintaining lab equipment.",
      title: "Student",
      password: "password2",
      profilePhoto: "/images/carlos.png",
      reservations: [
          {
            seatNo: "G01",
            computerLab: "GK101",
            dateOfRequest: "2024-07-05",
            timeOfRequest: "01:00 PM",
            dateOfReservation: "2024-07-06",
            timeOfReservation: "8:30AM-9:00AM"
          }
      ]
  },
  {
      email: "irina.solarez@dlsu.edu.ph",
      fullName: "Irina Solarez",
      description: "Lab technician with expertise in molecular biology and genetics.",
      title: "Lab Technician",
      password: "password3",
      profilePhoto: "/images/irina.png",
      reservations: [
          {
            seatNo: "A02",
            computerLab: "AG101",
            dateOfRequest: "2024-07-07",
            timeOfRequest: "02:00 PM",
            dateOfReservation: "2024-07-08",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "V02",
            computerLab: "VL101",
            dateOfRequest: "2024-07-09",
            timeOfRequest: "03:00 PM",
            dateOfReservation: "2024-07-10",
            timeOfReservation: "9:30AM-10:00AM"
          }
      ]
  },
  {
      email: "andres_hidalgo@dlsu.edu.ph",
      fullName: "Andres Hidalgo",
      description: "Dedicated student focused on environmental science and sustainability.",
      title: "Student",
      password: "password4",
      profilePhoto: "/images/andres.png",
      reservations: [
          {
            seatNo: "G02",
            computerLab: "GK101",
            dateOfRequest: "2024-07-11",
            timeOfRequest: "09:00 AM",
            dateOfReservation: "2024-07-12",
            timeOfReservation: "10:00AM-10:30AM"
          }
      ]
  },
  {
      email: "eli.lopez@dlsu.edu.ph",
      fullName: "Eli Lopez",
      description: "Experienced lab technician specializing in chemical analysis.",
      title: "Lab Technician",
      password: "password5",
      profilePhoto: "/images/eli.png",
      reservations: [
          {
            seatNo: "A03",
            computerLab: "AG101",
            dateOfRequest: "2024-07-13",
            timeOfRequest: "11:00 AM",
            dateOfReservation: "2024-07-14",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "V03",
            computerLab: "VL101",
            dateOfRequest: "2024-07-15",
            timeOfRequest: "12:00 PM",
            dateOfReservation: "2024-07-16",
            timeOfReservation: "11:00AM-11:30AM"
          }
      ]
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