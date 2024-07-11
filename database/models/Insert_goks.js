const mongoose = require('mongoose');
const Goks = require('./Goks'); // Ensure the path is correct

mongoose.connect('mongodb://localhost:27017/tinkerlab', { useNewUrlParser: true, useUnifiedTopology: true });

// run this in cmd (e.g node Insert_goks.js)
const sampleGoks = [ {
    seat: "GK01",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK02",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK03",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK04",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK05",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK06",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK07",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK08",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK09",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK10",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK11",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK12",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK13",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK14",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK15",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK16",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK17",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK18",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK19",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK20",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK21",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK22",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK23",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK24",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK25",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK26",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK27",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK28",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK29",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },
  {
    seat: "GK30",
    reservations: [
      {
        name: "Fredrick Tario",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-12",
        dateofreservation: "2024-07-12",
        timeofrequest: "8:00 AM",
        timeofreservation: "9:30AM-10:00AM",
        reservedby: "Fredrick Tario"
      }
    ]
  },

];

Goks.insertMany(sampleGoks)
  .then(() => {
    console.log('Sample users inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting sample users: ', err);
  });