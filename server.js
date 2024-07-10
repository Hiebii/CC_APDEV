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
const Users = require("./database/models/Users")
const Andrew = require("./database/models/Andrew")
const Goks = require("./database/models/Goks")
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

/*app.get('/CT-Profile', function(req, res) {
    res.sendFile(__dirname + '/CT/CT-Profile.html');
});*/

app.get('/CT-Profile', async (req, res) => {
    try {
      const fullName = 'Alice Johnson'; 
      const profiles = await Profiles.find({ name: fullName }).lean();
      if (!profiles) {
        return res.status(404).send('User not found');
      }
      res.render('CT-Profile', { profiles });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
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

/* Example of serving a static page and handling dynamic content separately
app.get('/CT-Profile_view-only_Liam', async (req, res) => {
    // Handle static file serving
    res.sendFile(__dirname + '/CT/CT-Profile_view-only_Liam.html');

    // Handle dynamic content (assuming profile ID is passed in URL or query)
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        // Render the profile page with user data
        res.render('profile', { user }); // Assuming 'profile' is your Handlebars template
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).send('Internal server error');
    }
});

// Example of handling search and redirect
app.get('/search', async (req, res) => {
    const name = req.query.name; // Get the name from query parameters
    try {
        const user = await User.findOne({ name }); // Query the database for the user
        if (!user) {
            return res.status(404).send('User not found');
        }
        // Redirect to profile page with the found user data
        res.redirect(`/CT-Profile_view-only_Liam/${user._id}`); // Redirect to the user's profile using their ID
    } catch (error) {
        console.error('Error searching for user:', error);
        res.status(500).send('Internal server error');
    }
});*/


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
