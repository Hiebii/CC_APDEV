const mongoose = require('mongoose');
const Velasco = require('./Velasco'); // Ensure the path is correct

mongoose.connect('mongodb+srv://johnfredricktario:password_12@tinkerlab.mbh0jj9.mongodb.net/Tinkerlab?retryWrites=true&w=majority&appName=Tinkerlab');

// run this in cmd (e.g node Insert_velasco.js)
const sampleVelasco = [ {
  seat: "VL01",
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
  seat: "VL02",
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
  seat: "VL03",
  reservations: [
    {
      name: "Andres Hidalgo",
      value: 1,
      anonymous: 0,
      dateofrequest: "2024-08-01",
      dateofreservation: "2024-08-02",
      timeofrequest: "8:00 AM",
      timeofreservation: "7:30AM-08:00AM",
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
      dateofrequest: "2024-08-01",
      dateofreservation: "2024-08-02",
      timeofrequest: "8:00 AM",
      timeofreservation: "7:30AM-08:00AM",
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
      dateofrequest: "2024-08-01",
      dateofreservation: "2024-08-02",
      timeofrequest: "8:00 AM",
      timeofreservation: "7:30AM-08:00AM",
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
      dateofrequest: "2024-08-01",
      dateofreservation: "2024-08-02",
      timeofrequest: "10:00 AM",
      timeofreservation: "10:30AM-11:00AM",
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
      dateofrequest: "2024-08-01",
      dateofreservation: "2024-08-02",
      timeofrequest: "8:00 AM",
      timeofreservation: "10:30AM-11:00AM",
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
      dateofrequest: "2024-08-04",
      dateofreservation: "2024-08-04",
      timeofrequest: "8:00 AM",
      timeofreservation: "10:30AM-11:00AM",
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
      dateofrequest: "2024-08-04",
      dateofreservation: "2024-08-04",
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
      dateofrequest: "2024-08-04",
      dateofreservation: "2024-08-04",
      timeofrequest: "8:00 AM",
      timeofreservation: "10:30AM-11:00AM",
      reservedby: "Andres Hidalgo"
    }
  ]
},
{
  seat: "VL11"
},
{
  seat: "VL12"
},
{
  seat: "VL13"
},
{
  seat: "VL14"
},
{
  seat: "VL15"
},
{
  seat: "VL16"
},
{
  seat: "VL17"
},
{
  seat: "VL18"
},
{
  seat: "VL19"
},
{
  seat: "VL20"
},
{
  seat: "VL21"
},
{
  seat: "VL22"
},
{
  seat: "VL23"
},
{
  seat: "VL24"
},
{
  seat: "VL25"
},
{
  seat: "VL26"
},
{
  seat: "VL27"
},
{
  seat: "VL28"
},
{
  seat: "VL29"
},
{
  seat: "VL30"
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