const mongoose = require('mongoose');
const Andrew = require('./Andrew'); // Ensure the path is correct

mongoose.connect('mongodb://localhost:27017/tinkerlab', { useNewUrlParser: true, useUnifiedTopology: true });

// run this in cmd (e.g node Insert_andrew.js)
const sampleAndrew = [ {
    seat: "A01",
    reservations: [
      {
        name: "Mari Santos",
        value: 1,
        anonymous: 0,
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-12",
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
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-12",
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
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-12",
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
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-12",
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
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-12",
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
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-12",
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
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-12",
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
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-15",
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
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-15",
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
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-15",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Andres Hidalgo"
      }
    ]
  },
  {
    seat: "A11",
    reservations: [
      {
        name: "Stephen Go",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-15",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Stephen Go"
      }
    ]
  },
  {
    seat: "A12",
    reservations: [
      {
        name: "Japeth Aguilar",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-15",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Japeth Aguilar"
      }
    ]
  },
  {
    seat: "A13",
    reservations: [
      {
        name: "Marie Espiritu",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-15",
        timeofrequest: "10:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Marie Espiritu"
      }
    ]
  },
  {
    seat: "A14",
    reservations: [
      {
        name: "Claudette Escobar",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-10",
        dateofreservation: "2024-07-15",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Claudette Escobar"
      }
    ]
  },
  {
    seat: "A15",
    reservations: [
      {
        name: "Mari Santos",
        value: 1,
        anonymous: 0,
        dateofrequest: "2024-07-15",
        dateofreservation: "2024-07-16",
        timeofrequest: "8:00 AM",
        timeofreservation: "7:30AM-8:00AM",
        reservedby: "Mari Santos"
      }
    ]
  },
  {
    seat: "A16",
    reservations: [
      {
        name: "Carlos Bautista",
        value: 1,
        anonymous: 0,
        dateofrequest: "2024-07-15",
        dateofreservation: "2024-07-16",
        timeofrequest: "9:00 AM",
        timeofreservation: "7:30AM-8:00AM",
        reservedby: "Carlos Bautista"
      }
    ]
  },
  {
    seat: "A17",
    reservations: [
      {
        name: "Andres Hidalgo",
        value: 1,
        anonymous: 0,
        dateofrequest: "2024-07-16",
        dateofreservation: "2024-07-16",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Andres Hidalgo"
      }
    ]
  },
  {
    seat: "A18",
    reservations: [
      {
        name: "Stephen Go",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-15",
        dateofreservation: "2024-07-16",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Stephen Go"
      }
    ]
  },
  {
    seat: "A19",
    reservations: [
      {
        name: "Japeth Aguilar",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-15",
        dateofreservation: "2024-07-16",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Japeth Aguilar"
      }
    ]
  },
  {
    seat: "A20",
    reservations: [
      {
        name: "Marie Espiritu",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-15",
        dateofreservation: "2024-07-18",
        timeofrequest: "10:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Marie Espiritu"
      }
    ]
  },
  {
    seat: "A21",
    reservations: [
      {
        name: "Claudette Escobar",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-15",
        dateofreservation: "2024-07-18",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Claudette Escobar"
      }
    ]
  },
  {
    seat: "A22",
    reservations: [
      {
        name: "Carlos Bautista",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-15",
        dateofreservation: "2024-07-18",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Irina Solarez"
      }
    ]
  },
  {
    seat: "A23",
    reservations: [
      {
        name: "Carlos Bautista",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-15",
        dateofreservation: "2024-07-19",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Irina Solzarez"
      }
    ]
  },
  {
    seat: "A24",
    reservations: [
      {
        name: "Andres Hidalgo",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-15",
        dateofreservation: "2024-07-18",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Irish Solarez"
      }
    ]
  },
  {
    seat: "A25",
    reservations: [
      {
        name: "Stephen Go",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-15",
        dateofreservation: "2024-07-18",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Irish Solarez"
      }
    ]
  },
  {
    seat: "A26",
    reservations: [
      {
        name: "Japeth Aguilar",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-15",
        dateofreservation: "2024-07-18",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Irish Solarez"
      }
    ]
  },
  {
    seat: "A27",
    reservations: [
      {
        name: "Marie Espiritu",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-15",
        dateofreservation: "2024-07-18",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Eli Lopez"
      }
    ]
  },
  {
    seat: "A28",
    reservations: [
      {
        name: "Claudette Escobar",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-17",
        dateofreservation: "2024-07-22",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Eli Lopez"
      }
    ]
  },
  {
    seat: "A29",
    reservations: [
      {
        name: "Claudette Escobar",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-17",
        dateofreservation: "2024-07-23",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Eli Lopez"
      }
    ]
  },
  {
    seat: "A30",
    reservations: [
      {
        name: "Claudette Escobar",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-17",
        dateofreservation: "2024-07-24",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Eli Lopez"
      }
    ]
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