const mongoose = require('mongoose');
const Andrew = require('./Andrew'); // Ensure the path is correct

mongoose.connect('mongodb://localhost:27017/tinkerlab', { useNewUrlParser: true, useUnifiedTopology: true });

// run this in cmd (e.g node Users_insert.js)
const sampleAndrew = [ {
    seat: "A01",
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
    seat: "A02",
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
    seat: "A03",
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
    seat: "A04",
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
    seat: "A05",
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
    seat: "A06",
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
    seat: "A07",
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
    seat: "A08",
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
    seat: "A09",
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
    seat: "A10",
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
    seat: "A11",
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
    seat: "A12",
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
    seat: "A13",
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
    seat: "A14",
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
    seat: "A15",
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
    seat: "A16",
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
    seat: "A17",
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
    seat: "A18",
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
    seat: "A19",
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
    seat: "A20",
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
    seat: "A21",
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
    seat: "A22",
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
    seat: "A23",
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
    seat: "A24",
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
    seat: "A25",
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
    seat: "A26",
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
    seat: "A27",
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
    seat: "A28",
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
    seat: "A29",
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
    seat: "A30",
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

Andrew.insertMany(sampleAndrew)
  .then(() => {
    console.log('Sample users inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting sample users: ', err);
  });