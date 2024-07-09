const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/TryH')

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const lodash = require('lodash');

const app = express();
const port = 3000; 

const hbs = require('hbs');
app.set('view engine','hbs');
<<<<<<< HEAD

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));    
app.use(express.static(__dirname));
=======
>>>>>>> fred_branch

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

/*
app.use(
    session((
        secret: "secret-key",
        resave: false,
        saveUninitialized: false,
    ))
);*/


/*// Serve the /login-page.html file at the root route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/login-page.hbs');
});*/

//Login Start Route

app.get('/', (req, res) =>{
    res.render('login-page');
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
// CT-Menu
app.get('/CT-homepage', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-homepage.html');
});

app.get('/CT-View-Edit', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-View-Edit.html');
});

app.get('/CT-View-Edit_reservation-details', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-View-Edit_reservation-details.html');
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


// CT-Reservation_details & Profile
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


// LT-Reservation_details & Profile
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
