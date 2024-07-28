const mongoose = require('mongoose');
const Andrew = require('./Andrew'); // Ensure the path is correct

mongoose.connect('mongodb+srv://johnfredricktario:password_12@tinkerlab.mbh0jj9.mongodb.net/Tinkerlab?retryWrites=true&w=majority&appName=Tinkerlab');

// run this in cmd (e.g node Insert_andrew.js)
const sampleAndrew = [ {
    seat: "A01",
    reservations: [
      {
        name: "Mari Santos",
        value: 1,
        anonymous: 0,
        dateofrequest: "2024-07-31",
        dateofreservation: "2024-07-31",
        timeofrequest: "8:00 AM",
        timeofreservation: "7:30AM-8:00AM",
        reservedby: "Irina Solarez"
      }
    ]
  },
  {
    seat: "A02",
    reservations: [
      {
        name: "Carlos Bautista",
        value: 1,
        anonymous: 0,
        dateofrequest: "2024-07-31",
        dateofreservation: "2024-07-31",
        timeofrequest: "9:00 AM",
        timeofreservation: "7:30AM-8:00AM",
        reservedby: "Irina Solarez"
      }
    ]
  },
  {
    seat: "A03",
    reservations: [
      {
        name: "Andres Hidalgo",
        value: 1,
        anonymous: 0,
        dateofrequest: "2024-07-31",
        dateofreservation: "2024-07-31",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Andres Hidalgo"
      }
    ]
  },
  {
    seat: "A04",
    reservations: [
      {
        name: "Stephen Go",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-31",
        dateofreservation: "2024-07-31",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Stephen Go"
      }
    ]
  },
  {
    seat: "A05",
    reservations: [
      {
        name: "Japeth Aguilar",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-31",
        dateofreservation: "2024-07-31",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Japeth Aguilar"
      }
    ]
  },
  {
    seat: "A06",
    reservations: [
      {
        name: "Marie Espiritu",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-31",
        dateofreservation: "2024-07-31",
        timeofrequest: "10:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Marie Espiritu"
      }
    ]
  },
  {
    seat: "A07",
    reservations: [
      {
        name: "Claudette Escobar",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-31",
        dateofreservation: "2024-07-31",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Claudette Escobar"
      }
    ]
  },
  {
    seat: "A08",
    reservations: [
      {
        name: "Mari Santos",
        value: 1,
        anonymous: 0,
        dateofrequest: "2024-07-31",
        dateofreservation: "2024-08-03",
        timeofrequest: "8:00 AM",
        timeofreservation: "7:30AM-8:00AM",
        reservedby: "Mari Santos"
      }
    ]
  },
  {
    seat: "A09",
    reservations: [
      {
        name: "Carlos Bautista",
        value: 1,
        anonymous: 0,
        dateofrequest: "2024-07-31",
        dateofreservation: "2024-08-03",
        timeofrequest: "9:00 AM",
        timeofreservation: "7:30AM-8:00AM",
        reservedby: "Carlos Bautista"
      }
    ]
  },
  {
    seat: "A10",
    reservations: [
      {
        name: "Andres Hidalgo",
        value: 1,
        anonymous: 0,
        dateofrequest: "2024-07-31",
        dateofreservation: "2024-08-03",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Andres Hidalgo"
      }
    ]
  },
  {
    seat: "A11"
  },
  {
    seat: "A12"
  },
  {
    seat: "A13"
  },
  {
    seat: "A14"
  },
  {
    seat: "A15"
  },
  {
    seat: "A16"
  },
  {
    seat: "A17"
  },
  {
    seat: "A18"
  },
  {
    seat: "A19"
  },
  {
    seat: "A20"
  },
  {
    seat: "A21"
  },
  {
    seat: "A22"
  },
  {
    seat: "A23"
  },
  {
    seat: "A24"
  },
  {
    seat: "A25"
  },
  {
    seat: "A26"
  },
  {
    seat: "A27"
  },
  {
    seat: "A28"
  },
  {
    seat: "A29"
  },
  {
    seat: "A30"
  }

];

Andrew.insertMany(sampleAndrew)
  .then(() => {
    console.log('Sample users inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting sample users: ', err);
  });