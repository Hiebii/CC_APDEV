const mongoose = require('mongoose');
const Goks = require('./Goks'); // Ensure the path is correct

mongoose.connect('mongodb+srv://johnfredricktario:password_12@tinkerlab.mbh0jj9.mongodb.net/Tinkerlab?retryWrites=true&w=majority&appName=Tinkerlab');

// run this in cmd (e.g node Insert_goks.js)
const sampleGoks = [ {
  seat: "GK01",
  reservations: [
    {
      name: "Mari Santos",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-08-01",
      dateofreservation: "2024-08-02",
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
      dateofrequest: "2024-08-01",
      dateofreservation: "2024-08-02",
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
      dateofrequest: "2024-08-02",
      dateofreservation: "2024-08-03",
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
      anonymous: 1,
      dateofrequest: "2024-08-03",
      dateofreservation: "2024-08-04",
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
      dateofrequest: "2024-07-30",
      dateofreservation: "2024-07-31",
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
      dateofrequest: "2024-08-02",
      dateofreservation: "2024-08-03",
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
      anonymous: 1,
      dateofrequest: "2024-08-02",
      dateofreservation: "2024-08-03",
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
      dateofrequest: "2024-08-02",
      dateofreservation: "2024-08-03",
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
      dateofrequest: "2024-08-02",
      dateofreservation: "2024-08-04",
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
      dateofrequest: "2024-08-02",
      dateofreservation: "2024-08-04",
      timeofrequest: "8:00 AM",
      timeofreservation: "9:30AM-10:00AM",
      reservedby: "Andres Hidalgo"
    }
  ]
},
{
  seat: "GK11"
},
{
  seat: "GK12"
},
{
  seat: "GK13"
},
{
  seat: "GK14"
},
{
  seat: "GK15"
},
{
  seat: "GK16"
},
{
  seat: "GK17"
},
{
  seat: "GK18"
},
{
  seat: "GK19"
},
{
  seat: "GK20"
},
{
  seat: "GK21"
},
{
  seat: "GK22"
},
{
  seat: "GK23"
},
{
  seat: "GK24"
},
{
  seat: "GK25"
},
{
  seat: "GK26"
},
{
  seat: "GK27"
},
{
  seat: "GK28"
},
{
  seat: "GK29"
},
{
  seat: "GK30"
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