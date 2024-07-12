const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/tinkerlab')

/* Initialize express */
const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000; 

/* For file uplods */
const fileUpload = require('express-fileupload')

/* Initialize our post */

const Users = require("./database/models/Users")
const Andrew = require("./database/models/Andrew")
const Goks = require("./database/models/Goks")
const Velasco = require("./database/models/Velasco")
const path = require('path') // our path directory

app.use(express.json()) // use json
app.use(express.urlencoded( {extended: true})); // files consist of more than strings
app.use(express.static('public')) // we'll add a static directory named "public"
app.use(fileUpload()) // for fileuploads

// Configure session middleware
app.use(session({
    secret: 'yourSecretKey', // Replace with your own secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

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
        const { date, time } = req.query;

        const andrews = await Andrew.aggregate([{ $match: { seat: { $in: ['A01', 'A02', 'A03', 'A04', 'A05'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const andrews2 = await Andrew.aggregate([{ $match: { seat: { $in: ['A06', 'A07', 'A08', 'A09', 'A10'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const andrews3 = await Andrew.aggregate([{ $match: { seat: { $in: ['A11', 'A12', 'A13', 'A14', 'A15'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const andrews4 = await Andrew.aggregate([{ $match: { seat: { $in: ['A16', 'A17', 'A18', 'A19', 'A20'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const andrews5 = await Andrew.aggregate([{ $match: { seat: { $in: ['A21', 'A22', 'A23', 'A24', 'A25'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const andrews6 = await Andrew.aggregate([{ $match: { seat: { $in: ['A26', 'A27', 'A28', 'A29', 'A30'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);
        // Render your Handlebars template with the data
        res.render('CT-Reservation_Andrew', { andrews, andrews2, andrews3, andrews4, andrews5, andrews6 });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});



app.get('/Goks', async (req, res) => {
    try {
        const { date, time } = req.query;

        const goks = await Goks.aggregate([{ $match: { seat: { $in: ['GK01', 'GK02', 'GK03', 'GK04', 'GK05'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const goks2 = await Goks.aggregate([{ $match: { seat: { $in: ['GK06', 'GK07', 'GK08', 'GK09', 'GK10'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const goks3 = await Goks.aggregate([{ $match: { seat: { $in: ['GK11', 'GK12', 'GK13', 'GK14', 'GK15'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const goks4 = await Goks.aggregate([{ $match: { seat: { $in: ['GK16', 'GK17', 'GK18', 'GK19', 'GK20'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const goks5 = await Goks.aggregate([{ $match: { seat: { $in: ['GK21', 'GK22', 'GK23', 'GK24', 'GK25'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const goks6 = await Goks.aggregate([{ $match: { seat: { $in: ['GK26', 'GK27', 'GK28', 'GK29', 'GK30'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);
        // Render your Handlebars template with the data
        res.render('CT-Reservation_Goks', { goks , goks2, goks3, goks4, goks5, goks6 });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});


app.get('/Velasco', async (req, res) => {
    try {
        const { date, time } = req.query;

        const velasco = await Velasco.aggregate([{ $match: { seat: { $in: ['VL01', 'VL02', 'VL03', 'VL04', 'VL05'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const velasco2 = await Velasco.aggregate([{ $match: { seat: { $in: ['VL06', 'VL07', 'VL08', 'VL09', 'VL10'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const velasco3 = await Velasco.aggregate([{ $match: { seat: { $in: ['VL11', 'VL12', 'VL13', 'VL14', 'VL15'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const velasco4 = await Velasco.aggregate([{ $match: { seat: { $in: ['VL16', 'VL17', 'VL18', 'VL19', 'VL20'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const velasco5 = await Velasco.aggregate([{ $match: { seat: { $in: ['VL21', 'VL22', 'VL23', 'VL24', 'VL25'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const velasco6 = await Velasco.aggregate([{ $match: { seat: { $in: ['VL26', 'VL27', 'VL28', 'VL29', 'VL30'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);
        // Render your Handlebars template with the data
        res.render('CT-Reservation_Velasco', { velasco , velasco2, velasco3, velasco4, velasco5, velasco6 });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

/*
// Example endpoint for handling reservations
app.post('/reserve', async (req, res) => {
    const { dateofreservation, timeofreservation, seatNames, Collection } = req.body;

    // Validate Collection and determine Roomname
    let Roomname;
    switch (Collection) {
        case 'CT-Reservation_Andrew':
            Roomname = "AG101";
            break;
        case 'CT-Reservation_Goks':
            Roomname = "GK101";
            break;
        case 'CT-Reservation_Velascos':
            Roomname = "VL101";
            break;
        default:
            return res.status(400).send('Invalid Collection');
    }

    try {
        // Example of a function to get model for the given Collection
        const ReservationModel = getModelForCollection(Collection);

        // Iterate over each seatName to save reservations
        for (const seatName of seatNames) {
            const newReservation = {
                name: 'Fredrick Tario',
                value: 1,
                anonymous: 1,
                dateofrequest: new Date().toISOString().split('T')[0],
                dateofreservation,
                timeofrequest: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                timeofreservation,
                reservedby: 'Fredrick Tario'
            };

            // Update or create reservation for the seat
            await ReservationModel.updateOne(
                { seat: seatName },
                { $push: { reservations: newReservation } },
                { upsert: true } // Creates a new document if seatName doesn't exist
            );
        }

        res.status(201).send('Reservations created successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Example function to get appropriate model for the Collection
function getModelForCollection(Collection) {
    // Example implementation based on your logic
    switch (Collection) {
        case 'CT-Reservation_Andrew':
            return AndrewReservationModel; // Replace with your actual model
        case 'CT-Reservation_Goks':
            return GoksReservationModel; // Replace with your actual model
        case 'CT-Reservation_Velascos':
            return VelascosReservationModel; // Replace with your actual model
        default:
            throw new Error('Invalid Collection');
    }
}

// Example reservation models (replace with your actual Mongoose models)
const AndrewReservationModel = require('./database/models/Andrew');
const GoksReservationModel = require('./database/models/Goks');
const VelascosReservationModel = require('./database/models/Velasco');
*/

/*-----------------------      SIGNUP      --------------------------*/ 
app.post('/signup', async (req, res) => {
    const { fullName, email, password, title } = req.body;

    try { 
        const existingEmail = await Users.findOne({ email });
        if (existingEmail){
            return res.status(400).json({ message: 'User Already Exists!' });
        }

        const newUser = new Users({ fullName, email, password, title });
        await newUser.save();

        res.status(201).json({ message:'User registered successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message:'Server Error!' });
    }
});

/*-----------------------      LOGIN      --------------------------*/ 
app.post('/login', async (req, res) => {
    const { email, password }  = req.body;

    try {
        const user = await Users.findOne({ email });
        if (!user){
            return res.render('login-page', { error: 'User does not exist!' });
        }

        if (user.password !== password){
            return res.render('login-page', { error: 'Invalid Password!' });
        }

        req.session.userId = user._id; // Store user ID in session

        if (user.title === 'Lab Technician'){
            res.redirect('/LT-homepage');
        } else if (user.title === 'Student'){
            res.redirect('/CT-homepage');
        } else {
            res.status(400).json({ message: 'Unknown role!' });
        }
    } catch(err) {
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

let reservationData = {}; 
let data = {}; 

app.post('/CT-View-Edit_reservation-details', (req, res) => {
    reservationData = req.body;
    res.status(200).send('Reservation data received');
});

app.get('/CT-View-Edit_reservation-details', (req, res) => {
    res.render('CT-View-Edit_reservation-details', reservationData);
});

app.post('/CT-View-Edit_success-edit', (req, res) => {
    data = req.body;
    res.status(200).send('Reservation data received');
});

app.get('/CT-View-Edit_success-edit', function(req, res) {
    res.render('CT-View-Edit_success-edit', data);
});
/*-----------------------      CT PROFILE      --------------------------*/ 
app.get('/CT-Profile', async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }

        const user = await Users.findById(req.session.userId).lean();
        if (!user) {
            return res.status(404).send('User not found');
        }

        res.render('CT-Profile', { user });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
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

/*-----------------------      LT PROFILE      --------------------------*/ 
app.get('/LT-Profile', async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }

        const user = await Users.findById(req.session.userId).lean();
        if (!user) {
            return res.status(404).send('User not found');
        }

        res.render('LT-Profile', { user });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
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
