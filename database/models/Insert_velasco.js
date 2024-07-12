const mongoose = require('mongoose');
const Velasco = require('./Velasco'); // Ensure the path is correct

mongoose.connect('mongodb://localhost:27017/tinkerlab', { useNewUrlParser: true, useUnifiedTopology: true });

// run this in cmd (e.g node Insert_velasco.js)
const sampleVelasco = [ {
  seat: "VL01",
  reservations: [
    {
      
      name: "Mari Santos",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-01",
      dateofreservation: "2024-07-12",
      timeofrequest: "8:00 AM",
      timeofreservation: "7:30AM-8:00AM",
      reservedby: "Mari Santos"
    }
  ]
},
{
  seat: "VL02",
  reservations: [
    {
      name: "Carlos Bautista",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-01",
      dateofreservation: "2024-07-12",
      timeofrequest: "9:00 AM",
      timeofreservation: "7:30AM-8:00AM",
      reservedby: "Carlos Bautista"
    }
  ]
},
{
  seat: "VL03",
  reservations: [
    {
      name: "Andres Hidalgo",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-01",
      dateofreservation: "2024-07-13",
      timeofrequest: "8:00 AM",
      timeofreservation: "9:30AM-10:00AM",
      reservedby: "Andres Hidalgo"
    }
  ]
},
{
  seat: "VL04",
  reservations: [
    {
      name: "Stephen Go",
      value: 1,
      anonymous: 1,
      dateofrequest: "2024-07-01",
      dateofreservation: "2024-07-12",
      timeofrequest: "8:00 AM",
      timeofreservation: "9:30AM-10:00AM",
      reservedby: "Stephen Go"
    }
  ]
},
{
  seat: "VL05",
  reservations: [
    {
      name: "Japeth Aguilar",
      value: 1,
      anonymous: 1,
      dateofrequest: "2024-07-01",
      dateofreservation: "2024-07-12",
      timeofrequest: "8:00 AM",
      timeofreservation: "9:30AM-10:00AM",
      reservedby: "Japeth Aguilar"
    }
  ]
},
{
  seat: "VL06",
  reservations: [
    {
      name: "Marie Espiritu",
      value: 1,
      anonymous: 1,
      dateofrequest: "2024-07-01",
      dateofreservation: "2024-07-12",
      timeofrequest: "10:00 AM",
      timeofreservation: "10:00AM-10:30AM",
      reservedby: "Marie Espiritu"
    }
  ]
},
{
  seat: "VL07",
  reservations: [
    {
      name: "Claudette Escobar",
      value: 1,
      anonymous: 1,
      dateofrequest: "2024-07-01",
      dateofreservation: "2024-07-14",
      timeofrequest: "8:00 AM",
      timeofreservation: "10:00AM-10:30AM",
      reservedby: "Claudette Escobar"
    }
  ]
},
{
  seat: "VL08",
  reservations: [
    {
      name: "Mari Santos",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-04",
      dateofreservation: "2024-07-15",
      timeofrequest: "8:00 AM",
      timeofreservation: "7:30AM-8:00AM",
      reservedby: "Mari Santos"
    }
  ]
},
{
  seat: "VL09",
  reservations: [
    {
      name: "Carlos Bautista",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-04",
      dateofreservation: "2024-07-14",
      timeofrequest: "9:00 AM",
      timeofreservation: "7:30AM-8:00AM",
      reservedby: "Carlos Bautista"
    }
  ]
},
{
  seat: "VL10",
  reservations: [
    {
      name: "Andres Hidalgo",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-04",
      dateofreservation: "2024-07-12",
      timeofrequest: "8:00 AM",
      timeofreservation: "9:30AM-10:00AM",
      reservedby: "Andres Hidalgo"
    }
  ]
},
{
  seat: "VL11",
  reservations: [
    {
      name: "Stephen Go",
      value: 1,
      anonymous: 1,
      dateofrequest: "2024-07-04",
      dateofreservation: "2024-07-13",
      timeofrequest: "8:00 AM",
      timeofreservation: "9:30AM-10:00AM",
      reservedby: "Stephen Go"
    }
  ]
},
{
  seat: "VL12",
  reservations: [
    {
      name: "Japeth Aguilar",
      value: 1,
      anonymous: 1,
      dateofrequest: "2024-07-04",
      dateofreservation: "2024-07-13",
      timeofrequest: "8:00 AM",
      timeofreservation: "9:30AM-10:00AM",
      reservedby: "Japeth Aguilar"
    }
  ]
},
{
  seat: "VL13",
  reservations: [
    {
      name: "Marie Espiritu",
      value: 1,
      anonymous: 1,
      dateofrequest: "2024-07-04",
      dateofreservation: "2024-07-12",
      timeofrequest: "10:00 AM",
      timeofreservation: "10:00AM-10:30AM",
      reservedby: "Marie Espiritu"
    }
  ]
},
{
  seat: "VL14",
  reservations: [
    {
      name: "Claudette Escobar",
      value: 1,
      anonymous: 1,
      dateofrequest: "2024-07-04",
      dateofreservation: "2024-07-12",
      timeofrequest: "8:00 AM",
      timeofreservation: "10:00AM-10:30AM",
      reservedby: "Claudette Escobar"
    }
  ]
},
{
  seat: "VL15",
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
  seat: "VL16",
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
  seat: "VL17",
  reservations: [
    {
      name: "Andres Hidalgo",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-15",
      dateofreservation: "2024-07-16",
      timeofrequest: "8:00 AM",
      timeofreservation: "9:30AM-10:00AM",
      reservedby: "Andres Hidalgo"
    }
  ]
},
{
  seat: "VL18",
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
  seat: "VL19",
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
  seat: "VL20",
  reservations: [
    {
      name: "Marie Espiritu",
      value: 1,
      anonymous: 1,
      dateofrequest: "2024-07-15",
      dateofreservation: "2024-07-16",
      timeofrequest: "10:00 AM",
      timeofreservation: "10:00AM-10:30AM",
      reservedby: "Marie Espiritu"
    }
  ]
},
{
  seat: "VL21",
  reservations: [
    {
      name: "Claudette Escobar",
      value: 1,
      anonymous: 1,
      dateofrequest: "2024-07-15",
      dateofreservation: "2024-07-16",
      timeofrequest: "8:00 AM",
      timeofreservation: "10:00AM-10:30AM",
      reservedby: "Claudette Escobar"
    }
  ]
},
{
    seat: "VL22",
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
    seat: "VL23",
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
    seat: "VL24",
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
    seat: "VL25",
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
    seat: "VL26",
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
    seat: "VL27",
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
    seat: "VL28",
    reservations: [
      {
        name: "Claudette Escobar",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-17",
        dateofreservation: "2024-07-17",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Eli Lopez"
      }
    ]
  },
  {
    seat: "VL29",
    reservations: [
      {
        name: "Claudette Escobar",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-17",
        dateofreservation: "2024-07-19",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Eli Lopez"
      }
    ]
  },
  {
    seat: "VL30",
    reservations: [
      {
        name: "Claudette Escobar",
        value: 1,
        anonymous: 1,
        dateofrequest: "2024-07-17",
        dateofreservation: "2024-07-18",
        timeofrequest: "8:00 AM",
        timeofreservation: "10:00AM-10:30AM",
        reservedby: "Eli Lopez"
      }
    ]
  }


];

Velasco.insertMany(sampleVelasco)
  .then(() => {
    console.log('Sample users inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting sample users: ', err);
  });