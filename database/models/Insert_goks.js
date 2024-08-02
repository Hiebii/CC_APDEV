const mongoose = require('mongoose');
const Goks = require('./Goks'); // Ensure the path is correct

mongoose.connect('mongodb+srv://johnfredricktario:password_12@tinkerlab.mbh0jj9.mongodb.net/Tinkerlab?retryWrites=true&w=majority&appName=Tinkerlab');

// run this in cmd (e.g node Insert_goks.js)
const sampleGoks = [ {
  seat: "GK01"
},
{
  seat: "GK02"
},
{
  seat: "GK03"
},
{
  seat: "GK04"
},
{
  seat: "GK05"
},
{
  seat: "GK06"
},
{
  seat: "GK07"
},
{
  seat: "GK08"
},
{
  seat: "GK09"
},
{
  seat: "GK10"
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