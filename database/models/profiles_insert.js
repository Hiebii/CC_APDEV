const mongoose = require('mongoose');
const Profile = require('./profiles');

mongoose.connect('mongodb://localhost:27017/tinkerlab', { useNewUrlParser: true, useUnifiedTopology: true });

// run this in cmd (e.g node profiles_insert)
const sampleProfiles = [
  {
    name: "Alice Johnson",
    role: "Student",
    description: "A diligent computer science student.",
    reservations: [
      {
        seatNo: "A01",
        computerLab: "AG101",
        dateOfRequest: "2024-07-01",
        timeOfRequest: "09:00 AM",
        dateOfReservation: "2024-07-02",
        timeOfReservation: "07:30 AM"
      }
    ]
  },
  {
    name: "Bob Smith",
    role: "Lab Technician",
    description: "Responsible for maintaining lab equipment.",
    reservations: [
      {
        seatNo: "G01",
        computerLab: "GK101",
        dateOfRequest: "2024-07-05",
        timeOfRequest: "01:00 PM",
        dateOfReservation: "2024-07-06",
        timeOfReservation: "08:30 AM"
      }
    ]
  },
  {
    name: "Carol White",
    role: "Student",
    description: "A keen learner and avid coder.",
    reservations: [
      {
        seatNo: "A02",
        computerLab: "AG101",
        dateOfRequest: "2024-07-07",
        timeOfRequest: "02:00 PM",
        dateOfReservation: "2024-07-08",
        timeOfReservation: "09:00 AM"
      },
      {
        seatNo: "V02",
        computerLab: "VL101",
        dateOfRequest: "2024-07-09",
        timeOfRequest: "03:00 PM",
        dateOfReservation: "2024-07-10",
        timeOfReservation: "09:30 AM"
      }
    ]
  },
  {
    name: "David Lee",
    role: "Lab Technician",
    description: "Provides technical support and equipment maintenance.",
    reservations: [
      {
        seatNo: "G02",
        computerLab: "GK101",
        dateOfRequest: "2024-07-11",
        timeOfRequest: "09:00 AM",
        dateOfReservation: "2024-07-12",
        timeOfReservation: "10:00 AM"
      }
    ]
  },
  {
    name: "Eva Green",
    role: "Student",
    description: "An IT enthusiast with a knack for problem-solving.",
    reservations: [
      {
        seatNo: "A03",
        computerLab: "AG101",
        dateOfRequest: "2024-07-13",
        timeOfRequest: "11:00 AM",
        dateOfReservation: "2024-07-14",
        timeOfReservation: "10:30 AM"
      },
      {
        seatNo: "V03",
        computerLab: "VL101",
        dateOfRequest: "2024-07-15",
        timeOfRequest: "12:00 PM",
        dateOfReservation: "2024-07-16",
        timeOfReservation: "11:00 AM"
      }
    ]
  }
];

Profile.insertMany(sampleProfiles)
  .then(() => {
    console.log('Sample profiles inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting sample profiles: ', err);
  });
