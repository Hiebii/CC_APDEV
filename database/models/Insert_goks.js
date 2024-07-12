const mongoose = require('mongoose');
const Goks = require('./Goks'); // Ensure the path is correct

mongoose.connect('mongodb://localhost:27017/tinkerlab', { useNewUrlParser: true, useUnifiedTopology: true });

// run this in cmd (e.g node Insert_goks.js)
const sampleGoks = [ {
  seat: "GK01",
  reservations: [
    {
      name: "Mari Santos",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-10",
      dateofreservation: "2024-07-12",
      timeofrequest: "8:00 AM",
      timeofreservation: "7:30AM-8:00AM",
      reservedby: "Mari Santos"
    }
  ]
},
{
  seat: "GK02",
  reservations: [
    {
      name: "Carlos Bautista",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-10",
      dateofreservation: "2024-07-12",
      timeofrequest: "9:00 AM",
      timeofreservation: "7:30AM-8:00AM",
      reservedby: "Carlos Bautista"
    }
  ]
},
{
  seat: "GK03",
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
  seat: "GK04",
  reservations: [
    {
      name: "Stephen Go",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-10",
      dateofreservation: "2024-07-12",
      timeofrequest: "8:00 AM",
      timeofreservation: "9:30AM-10:00AM",
      reservedby: "Stephen Go"
    }
  ]
},
{
  seat: "GK05",
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
  seat: "GK06",
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
  seat: "GK07",
  reservations: [
    {
      name: "Claudette Escobar",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-10",
      dateofreservation: "2024-07-12",
      timeofrequest: "8:00 AM",
      timeofreservation: "10:00AM-10:30AM",
      reservedby: "Claudette Escobar"
    }
  ]
},
{
  seat: "GK08",
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
  seat: "GK09",
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
  seat: "GK10",
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
  seat: "GK11",
  reservations: [
    {
      name: "Stephen Go",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-10",
      dateofreservation: "2024-07-15",
      timeofrequest: "8:00 AM",
      timeofreservation: "9:30AM-10:00AM",
      reservedby: "Stephen Go"
    }
  ]
},
{
  seat: "GK12",
  reservations: [
    {
      name: "Japeth Aguilar",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-10",
      dateofreservation: "2024-07-15",
      timeofrequest: "8:00 AM",
      timeofreservation: "9:30AM-10:00AM",
      reservedby: "Japeth Aguilar"
    }
  ]
},
{
  seat: "GK13",
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
  seat: "GK14",
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
  seat: "GK15",
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
  seat: "GK16",
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
  seat: "GK17",
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
  seat: "GK18",
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
  seat: "GK19",
  reservations: [
    {
      name: "Japeth Aguilar",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-15",
      dateofreservation: "2024-07-16",
      timeofrequest: "8:00 AM",
      timeofreservation: "9:30AM-10:00AM",
      reservedby: "Japeth Aguilar"
    }
  ]
},
{
  seat: "GK20",
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
  seat: "GK21",
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
  seat: "GK22",
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
  seat: "GK23",
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
  seat: "GK24",
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
  seat: "GK25",
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
  seat: "GK26",
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
  seat: "GK27",
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
  seat: "GK28",
  reservations: [
    {
      name: "Claudette Escobar",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-17",
      dateofreservation: "2024-07-12",
      timeofrequest: "8:00 AM",
      timeofreservation: "10:00AM-10:30AM",
      reservedby: "Eli Lopez"
    }
  ]
},
{
  seat: "GK29",
  reservations: [
    {
      name: "Claudette Escobar",
      value: 1,
      anonymous: 1,
      dateofrequest: "2024-07-17",
      dateofreservation: "2024-07-12",
      timeofrequest: "8:00 AM",
      timeofreservation: "10:00AM-10:30AM",
      reservedby: "Eli Lopez"
    }
  ]
},
{
  seat: "GK30",
  reservations: [
    {
      name: "Claudette Escobar",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-07-10",
      dateofreservation: "2024-07-13",
      timeofrequest: "8:00 AM",
      timeofreservation: "10:00AM-10:30AM",
      reservedby: "Eli Lopez"
    }
  ]
}

];

Goks.insertMany(sampleGoks)
  .then(() => {
    console.log('Sample users inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting sample users: ', err);
  });