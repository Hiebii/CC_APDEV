const mongoose = require('mongoose');
const Velasco = require('./Velasco'); // Ensure the path is correct

mongoose.connect('mongodb://localhost:27017/tinkerlab', { useNewUrlParser: true, useUnifiedTopology: true });

// run this in cmd (e.g node Insert_velasco.js)
const sampleVelasco = [ {
    seat: "VL01",
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
    seat: "VL02",
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
    seat: "VL03",
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
    seat: "VL04",
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
    seat: "VL05",
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
    seat: "VL06",
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
    seat: "VL07",
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
    seat: "VL08",
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
    seat: "VL09",
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
    seat: "VL10",
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
    seat: "VL11",
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
    seat: "VL12",
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
    seat: "VL13",
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
    seat: "VL14",
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
    seat: "VL15",
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
    seat: "VL16",
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
    seat: "VL17",
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
    seat: "VL18",
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
    seat: "VL19",
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
    seat: "VL20",
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
    seat: "VL21",
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
    seat: "VL22",
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
    seat: "VL23",
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
    seat: "VL24",
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
    seat: "VL25",
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
    seat: "VL26",
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
    seat: "VL27",
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
    seat: "VL28",
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
    seat: "VL29",
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
    seat: "VL30",
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

Velasco.insertMany(sampleVelasco)
  .then(() => {
    console.log('Sample users inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting sample users: ', err);
  });