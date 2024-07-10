const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/tinkerlab')

/* Initialize express */
const express = require('express');
const app = express();
const port = 3000; 

/* For file uplods */
const fileUpload = require('express-fileupload')

/* Initialize our post */
const Post = require("./database/models/Rooms")
const Andrew = require("./database/models/Andrew")
const Goks = require("./database/models/Goks")
const Users = require("./database/models/Users")
const path = require('path') // our path directory


app.use(express.json()) // use json
app.use(express.urlencoded( {extended: true})); // files consist of more than strings
app.use(express.static('public')) // we'll add a static directory named "public"
app.use(fileUpload()) // for fileuploads

//handlebar
var hbs = require('hbs')
app.set('view engine','hbs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

//Dont mind this one
/*const session = require('express-session');
const cookieParser = require('cookie-parser');*/
/*
app.get('/tinkerlab', (req, res) => {
    res.json({mssg: "welcomee to the api"})
})

app.get('/content', async(req,res) => {
    const posts = await Post.find({})
    console.log(posts)
    res.render('content',{posts})
})
*/


app.get('/Andrew', async (req, res) => {
    try {
        // Extract the date parameter from the query string
        const { date } = req.query;

        // Query the database based on seat and date
        const andrews = await Andrew.aggregate([{ $match: { seat: { $in: ['A01', 'A02', 'A03', 'A04', 'A05'] } } }, { $project: { seat: 1, reservations: { $cond: { if: { $eq: [{ $size: "$reservations" }, 0] }, then: 0, else: { $filter: { input: "$reservations", as: "reservation", cond: { $eq: ["$$reservation.dateofreservation", "2024-07-12"] } } } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const andrews2 = await Andrew.find({ seat: { $in: ['A04', 'A05'] }, date });

        // Render your Handlebars template with the data
        res.render('CT-Reservation_Andrew', { andrews, andrews2 });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});


/*-----------------------      SIGNUP      --------------------------*/ 

app.post('/signup', async (req, res) => {
    const { fullName, email, password, title } = req.body;

    try { 
        // This part is to check if an email already exists.
        const existingEmail = await Users.findOne({ email });
        //If email exists, send alert that there already exists a user with an email.
        if (existingEmail){
            return res.status(400).json({ message: 'User Already Exists!' });
        }
        //create the user
        const newUser = new Users({fullName, email, password, title});
        await newUser.save();

        res.status(201).json({ message:'User registered successfully!'});
    }catch (err){
        console.error(err);
        //Send an error if it is not working.
        res.status(500).json({ message:'Server Error!'});
    }
});

/*-----------------------      LOGIN      --------------------------*/ 
app.post('/login', async (req, res) => {
    const { email, password }  = req.body;

    try{
        //See if user does exist in the database
        const user = await Users.findOne({ email });
        if (!user){
            return res.render('login-page', { error: 'User does not exist! '});
        }

        if(user.password !== password){
            return res.render('login-page', { error: 'Invalid Password! '});
        }

        if (user.title === 'labtechnician'){
            res.redirect('/LT-homepage');
        } else if (user.title === 'student'){
            res.redirect('/CT-homepage');
        }else{
            res.status(400).json({ message: 'Unknown role!'});
        }
    }catch(err){
        console.error(err);
        res.status(500).send('Server Error!');
    }
});

/*-----------------------      ROUTES      --------------------------*/ 
// Serve the /login-page.html file at the root route
/*app.get('/', function(req, res) {
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
    res.render('login-page');
});

app.get('/signup-student', function(req, res) {
    res.sendFile(__dirname + '/START/signup-student.html');
});

app.get('/signup-labtechnician', function(req, res) {
    res.sendFile(__dirname + '/START/signup-labtechnician.html');
});


/*-----------------------      CT      --------------------------*/ 
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


/*-----------------------      LT      --------------------------*/ 
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
