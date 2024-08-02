const mongoose = require('mongoose');
const Velasco = require('./Velasco'); // Ensure the path is correct

mongoose.connect('mongodb+srv://johnfredricktario:password_12@tinkerlab.mbh0jj9.mongodb.net/Tinkerlab?retryWrites=true&w=majority&appName=Tinkerlab');

// run this in cmd (e.g node Insert_velasco.js)
const sampleVelasco = [ {
  seat: "VL01"
},
{
  seat: "VL02"
},
{
  seat: "VL03"
},
{
  seat: "VL04"
},
{
  seat: "VL05"
},
{
  seat: "VL06"
},
{
  seat: "VL07"
},
{
  seat: "VL08"
},
{
  seat: "VL09"
},
{
  seat: "VL10"
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