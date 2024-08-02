const mongoose = require('mongoose');
const Andrew = require('./Andrew'); // Ensure the path is correct

mongoose.connect('mongodb+srv://johnfredricktario:password_12@tinkerlab.mbh0jj9.mongodb.net/Tinkerlab?retryWrites=true&w=majority&appName=Tinkerlab');

// run this in cmd (e.g node Insert_andrew.js)
const sampleAndrew = [ {
    seat: "A01"
  },
  {
    seat: "A02"
  },
  {
    seat: "A03"
  },
  {
    seat: "A04"
  },
  {
    seat: "A05"
  },
  {
    seat: "A06"
  },
  {
    seat: "A07"
  },
  {
    seat: "A08"
  },
  {
    seat: "A09"
  },
  {
    seat: "A10"
  },
  {
    seat: "A11"
  },
  {
    seat: "A12"
  },
  {
    seat: "A13"
  },
  {
    seat: "A14"
  },
  {
    seat: "A15"
  },
  {
    seat: "A16"
  },
  {
    seat: "A17"
  },
  {
    seat: "A18"
  },
  {
    seat: "A19"
  },
  {
    seat: "A20"
  },
  {
    seat: "A21"
  },
  {
    seat: "A22"
  },
  {
    seat: "A23"
  },
  {
    seat: "A24"
  },
  {
    seat: "A25"
  },
  {
    seat: "A26"
  },
  {
    seat: "A27"
  },
  {
    seat: "A28"
  },
  {
    seat: "A29"
  },
  {
    seat: "A30"
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