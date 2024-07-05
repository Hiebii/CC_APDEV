var express = require('express');

const lodash = require('lodash');
const mongoose = require('mongoose');
const app = express();
const port = 3000; 

//Connect to MongoDB
const dbURI = 'mongodb+srv://DB_Grp15:MCO2@MCO2_Apdev.ctvkqsg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI);


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));


// Serve the /login-page.html file at the root route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/START/login-page.html');
});

//Login & Sign Up Page
app.get('/signup-initial', function(req, res) {
    res.sendFile(__dirname + '/START/signup-initial.html');
});

app.get('/CT-Reservation_search_view-only', function(req, res) {
    res.sendFile(__dirname + '/START/CT-Reservation_search_view-only.html');
});

app.get('/CT-Reservation_search_view-only', function(req, res) {
    res.sendFile(__dirname + '/START/CT-Reservation_search_view-only.html');
});

app.get('/login-page', function(req, res) {
    res.sendFile(__dirname + '/START/login-page.html');
});

app.get('/signup-student', function(req, res) {
    res.sendFile(__dirname + '/START/signup-student.html');
});

app.get('/signup-labtechnician', function(req, res) {
    res.sendFile(__dirname + '/START/signup-labtechnician.html');
});


//CT
// CT-Men
app.get('/CT-homepage', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-homepage.html');
});

app.get('/CT-View-Edit', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-View-Edit.html');
});

app.get('/CT-Profile', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-Profile.html');
});


// CT-Reservations
app.get('/CT-Reservation_Goks', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-Reservation_Goks.html');
});

app.get('/CT-Reservation_Velasco', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-Reservation_Velasco.html');
});

app.get('/CT-Reservation_Andrew', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-Reservation_Andrew.html');
});

app.get('/CT-Reservation_search-goks', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-Reservation_search-goks.html');
});

app.get('/CT-Reservation_search-andrew', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-Reservation_search-andrew.html');
});


// CT-Reservation_reservation-details & Profile
app.get('/CT-Reservation_reservation-details', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-Reservation_reservation-details.html');
});

app.get('/CT-Profile_view-only', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-Profile_view-only.html');
});

app.get('/CT-Profile_view-only_Liam', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-Profile_view-only_Liam.html');
});

app.get('/CT-Profile_view-only_Benjamin', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-Profile_view-only_Benjamin.html');
});


//LT
// LT-Menu Bar
app.get('/LT-homepage', function(req, res) {
    res.sendFile(__dirname + '/LT/LT-homepage.html');
});

app.get('/LT-Reservation_Goks', function(req, res) {
    res.sendFile(__dirname + '/LT/LT-Reservation_Goks.html');
});

app.get('/LT-View-Edit', function(req, res) {
    res.sendFile(__dirname + '/LT/LT-View-Edit.html');
});

app.get('/LT-Profile', function(req, res) {
    res.sendFile(__dirname + '/LT/LT-Profile.html');
});


// LT-Reservations
app.get('/LT-Reservation_Goks', function(req, res) {
    res.sendFile(__dirname + '/LT/LT-Reservation_Goks.html');
});

app.get('/LT-Reservation_Velasco', function(req, res) {
    res.sendFile(__dirname + '/LT/LT-Reservation_Velasco.html');
});

app.get('/LT-Reservation_Andrew', function(req, res) {
    res.sendFile(__dirname + '/LT/LT-Reservation_Andrew.html');
});

app.get('/LT-Reservation_search-goks', function(req, res) {
    res.sendFile(__dirname + '/LT/LT-Reservation_search-goks.html');
});

app.get('/LT-Reservation_search-goks', function(req, res) {
    res.sendFile(__dirname + '/LT/LT-Reservation_search-goks.html');
});

app.get('/LT-Reservation_search-andrew', function(req, res) {
    res.sendFile(__dirname + '/LT/LT-Reservation_search-andrew.html');
});

app.get('/LT-Reservation_reservation-details', function(req, res) {
    res.sendFile(__dirname + '/LT/LT-Reservation_reservation-details.html');
});


app.get('/LT-View-Edit_reservation-details', function(req, res) {
    res.sendFile(__dirname + '/LT/LT-View-Edit_reservation-details.html');
});

// Profile
app.get('/LT-Profile_view-only_Liam', function(req, res) {
    res.sendFile(__dirname + '/LT/LT-Profile_view-only_Liam.html');
});



// Handle form submission and respond with a success message
app.post('/submit-student-data', function(req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name + ' Submitted Successfully');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
