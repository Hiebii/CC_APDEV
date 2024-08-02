const mongoose = require('mongoose')
const {dbURL} = require('./config');

mongoose.connect(dbURL);

const { envPort, sessionKey } = require('./config');

/* Initialize express */
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const bcrypt = require('bcrypt');
const app = express();
const port = envPort || 9090; 

/* Initialize our post */
const Users = require("./database/models/Users");
const Andrew = require("./database/models/Andrew");
const Goks = require("./database/models/Goks");
const Velasco = require("./database/models/Velasco");
const path = require('path') 

app.use(express.json()); 
app.use(express.urlencoded( {extended: true})); 
app.use(express.static('public')); 
app.use(fileUpload());
app.use(cookieParser());

// Configure session middleware
app.use(session({
    secret: sessionKey,
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

// POST route to receive reservation data
app.post('/CT-Reservation_reservation-details', async (req, res) => {
    try {
        reservationData = req.body;
        user = req.session.userId;

        res.status(200).send('Reservation data received');
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

// GET route to render reservation details
app.get('/CT-Reservation_reservation-details', async (req, res) => {
    try {
        const userId = req.session.userId; // Assuming userId is stored in session

        // Fetch user data
        const user = await Users.findById(userId).lean(); // Assuming Users is your user model

        // Render the reservation details page with user and reservationData
        res.render('CT-Reservation_reservation-details', {user, reservationData});
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});


app.post('/CT-Reservation_success', (req, res) => {
    data = req.body;
    res.status(200).send('Reservation data received');
});

app.get('/CT-Reservation_success', function(req, res) {
    res.render('CT-Reservation_success', data);
});

app.get('/addReservation', function(req, res) {
    res.render('CT-Reservation_success',reservationData);
});

app.post('/addReservation', async (req, res) => {
    const data = req.body;

    if (!Array.isArray(data.seatNames)) {
        return res.status(400).send('seatNames should be an array');
    }

    try {
        const updatePromises = data.seatNames.map(seat => {
            const filter = { seat: seat };
            const update = {
                $push: {
                    reservations: {
                        name: data.reserverName,
                        reservedby: data.reserverName,
                        anonymous: data.anonymous,
                        dateofrequest: data.dateofrequest,
                        timeofrequest: data.timeofrequest,
                        dateofreservation: data.dateofreservation,
                        timeofreservation: data.timeofreservation,
                        value: 1
                    }
                }
            };

            let updatePromise;
            if (data.dblab === "Andrew") {
                updatePromise = Andrew.findOneAndUpdate(filter, update, { new: true });
            } else if (data.dblab === "Goks") {
                updatePromise = Goks.findOneAndUpdate(filter, update, { new: true });
            } else if (data.dblab === "Velasco") {
                updatePromise = Velasco.findOneAndUpdate(filter, update, { new: true });
            } else {
                throw new Error(`Unsupported dblab value: ${data.dblab}`);
            }

            return updatePromise;
        });

        const updatedResults = await Promise.all(updatePromises);

        if (updatedResults.some(updatedResult => updatedResult !== null)) {
            reservationData = data;
            return res.status(200).send('Reservation data received and updated successfully');
        } else {
            return res.status(404).send('Seats not found or reservations not updated');
        }
    } catch (err) {
        console.error('Error in adding reservation:', err);
        return res.status(500).send('An error occurred while adding reservation');
    }
});

/*-----------------------      SIGNUP      --------------------------*/ 
app.post('/signup', async (req, res) => {
    const { fullName, email, password, confirmpassword, title } = req.body;
    console.log('Received Data:', req.body);

    try { 
        if (!fullName || !email || !password && title === 'Student'){
            console.error('Missing Fields: ', { fullName, email, password });
            return res.render('signup-student', { error: 'All fields are required!' });
            //return res.status(400).json({ error: 'All fields are required!', redirectUrl: '/signup-student'  });
            
        }
        else if (!fullName || !email || !password || !confirmpassword && title === 'Lab Technician'){
            console.error('Missing Fields: ', { fullName, email, password });
            return res.render('signup-labtechnician', { error: 'All fields are required!' });
            //return res.status(400).json({ error: 'All fields are required!', redirectUrl: '/signup-labtechnician'  });
        }

        // Email validation for Students
        if (title === 'Student' && !/^[^@]+_[^@]+@dlsu\.edu\.ph$/.test(email)) {
            return res.render('signup-student', { error: 'Email must be in the format <br> (firstname)_(lastname)@dlsu.edu.ph' });
        }

        // Email validation for Lab Technicians
        if (title === 'Lab Technician' && !/^[^@]+\.[^@]+@dlsu\.edu\.ph$/.test(email)) {
            return res.render('signup-labtechnician', { error: 'Email must be in the format <br> (firstname).(lastname)@dlsu.edu.ph' });
        }
        
        const existingEmail = await Users.findOne({ email });
        if (existingEmail && password===confirmpassword && title === 'Student'){
            
            //return res.render('signup-student', { error: 'User already exists!' });
            return res.render('signup-student', { error: 'User already exists!' });
            //return res.status(400).json({ error: 'User already exists!', redirectUrl: '/signup-student' });
        }
        else if (existingEmail && password===confirmpassword && title === 'Lab Technician'){
            return res.render('signup-labtechnician', { error: 'User already exists!' });
            //return res.status(400).json({ error: 'User already exists!', redirectUrl: '/signup-labtechnician' });
        }
        else if (existingEmail && password!==confirmpassword && title === 'Student'){
            return res.render('signup-student', { error: 'User already exists! <br> Passwords do not match!' });
            //return res.status(400).json({ error: 'User already exists!', redirectUrl: '/signup-labtechnician' });
        }
        else if (existingEmail && password!==confirmpassword && title === 'Lab Technician'){
            return res.render('signup-labtechnician', { error: 'User already exists! <br> Passwords do not match!' });
            //return res.status(400).json({ error: 'User already exists!', redirectUrl: '/signup-labtechnician' });
        }
        else if (!existingEmail && password!==confirmpassword && title === 'Student'){
            return res.render('signup-student', { error: 'Passwords do not match!' });
            //return res.status(400).json({ error: 'User already exists!', redirectUrl: '/signup-labtechnician' });
        }
        else if (!existingEmail && password!==confirmpassword && title === 'Lab Technician'){
            return res.render('signup-labtechnician', { error: 'Passwords do not match!' });
            //return res.status(400).json({ error: 'User already exists!', redirectUrl: '/signup-labtechnician' });
        }
        else{
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password,saltRounds);

            const newUser = new Users({ fullName, email, password: hashedPassword, title });
            await newUser.save();
            return res.render('login-page', { message: 'User registered successfully!' });
            // return res.status(201).json({ message: 'User registered successfully!', redirectUrl: '/login-page' });
        }
        
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message:'Server Error!' });
    }
});

/*-----------------------      LOGIN      --------------------------*/ 
app.post('/login', async (req, res) => {
    const { email, password, rememberMe }  = req.body;

    try {
        const user = await Users.findOne({ email });
        if (!user){
            return res.render('login-page', { error: 'User does not exist!' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.render('login-page', { error: 'Invalid Password!' });
        }
        
        /*if (user.password !== password){
            return res.render('login-page', { error: 'Invalid Password!' });
        }*/

        req.session.userId = user._id; // Store user ID in session

        res.cookie('sessionID', req.sessionID, { maxAge: 30 * 24 * 60 * 60 * 1000});
        res.cookie('email', user.email, { maxAge: 30 * 24 * 60 * 60 * 1000});
        res.cookie('title', user.title, { maxAge: 30 * 24 * 60 * 60 * 1000});
        res.cookie('password', user.password, {maxAge: 30 * 24 * 60 * 60 * 1000});
        if (req.cookies.sessionID && req.cookies.email && req.cookies.title && req.cookies.password){
            console.log('YES - Cookie exists');
            console.log("Session ID:", req.cookies.sessionID);
            console.log("Email:",req.cookies.email);
            console.log("Title:",req.cookies.title);
            console.log("Password:",req.cookies.password);
        }else{
            console.log("NO - NO SUCH COOKIES EXIST");
        }
      
        if (rememberMe){
            req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // This is around 30 days
        } else {
            req.session.cookie.expires = false;
        }

        
        if (user.title === 'Lab Technician'){
            res.redirect('/LT-homepage');
        } else if (user.title === 'Student'){
            res.redirect('/CT-homepage');
        } else {
            res.status(400).json({ error: 'Unknown role!' });
        }
    } catch(err) {
        console.error(err);
        res.status(500).send('Server Error!');
    }
});

/*-----------------------      LOGOUT      --------------------------*/ 

app.get('/logout', (req, res) =>  {
    req.session.destroy((err)=>{
        console.log('Attempting to destroy session and clear cookies...');
        if (err){
            console.error(err);
            return res.status(500).send('Server Error!');
        }
        console.log('Session destroyed. Clearing cookies...');
        res.clearCookie('sessionID', { path: '/' });
        res.clearCookie('email', { path: '/' });
        res.clearCookie('title', { path: '/' });
        res.clearCookie('password', { path: '/' });
        res.clearCookie('connect.sid', { path: '/' });

        console.log('Cookies cleared. Redirecting...');
        res.redirect('/');
    });
});

/*-----------------------      ROUTES      --------------------------*/ 
// Serve the /login-page.html file at the root route
/*app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/login-page.hbs');
});*/

//Login Start Route

function ensureAuthenticated (req, res, next) { 
    if (req.session.userId){
        return next();
    }
    res.redirect('/');
}

app.get('/', async (req,res) => {
    if (req.session.userId){
        try {
            const user = await Users.findById(req.session.userId).lean();
            if (user){
                if (user.title === 'Lab Technician'){
                    res.redirect('/LT-homepage');
                } else if (user.title === 'Student'){
                    res.redirect('/CT-homepage');
                }
            }
        }catch(err){
            console.error(err);
        }
    }
    res.render('login-page');
});

//Login & Sign Up Page
app.get('/signup-initial', function(req, res) {
    res.sendFile(__dirname + '/START/signup-initial.html');
});

 app.get('/CT-View-Edit-search-view-only', function(req, res) {
    const data = req.session.searchResults;
    res.render('CT-View-Edit-search-view-only', { data });
});

 app.post('/VgetSearch', async (req, res) => {
    try {
        const { dblab, dateofreservation, timeofreservation } = req.body;
        let data;


        switch (dblab) {
            case "Goks":
                    try {
                        // Build the match query dynamically
                        let matchQuery = {};
                        let allDates, allTimes;

                        if (dateofreservation && timeofreservation) {
                        // Both date and time are provided
                        matchQuery["reservations.dateofreservation"] = dateofreservation;
                        matchQuery["reservations.timeofreservation"] = timeofreservation;
                        } else if (dateofreservation) {
                        // Only date is provided
                        matchQuery["reservations.dateofreservation"] = dateofreservation;
                        matchQuery["reservations.timeofreservation"] = { $exists: true }; // Match all times on this date
                        } else if (timeofreservation) {
                        // Only time is provided
                        matchQuery["reservations.dateofreservation"] = { $exists: true }; // Match all dates for this time
                        matchQuery["reservations.timeofreservation"] = timeofreservation;
                        }

                        // Aggregation for Goks
                        const goksResults = await Goks.aggregate([
                        { $unwind: "$reservations" },
                        { $match: matchQuery },
                        { $group: {
                            _id: {
                                dateofreservation: "$reservations.dateofreservation",
                                timeofreservation: "$reservations.timeofreservation"
                            },
                            total: { $sum: 1 }
                            }
                        },
                        { $sort: { "_id.dateofreservation": 1, "_id.timeofreservation": 1 } }
                        ]);

                        // Map the results to include the available seats for each date-time combination
                        // If no results found, create default data
                        if (goksResults.length === 0) {
                            data = [{
                            date: dateofreservation || 'default date',
                            time: timeofreservation || 'default time',
                            dblab: "GK101",
                            availableSeats: 30
                            }];
                        } else {
                            // Map the results to include the available seats for each date-time combination
                            data = goksResults.map(result => ({
                            date: result._id.dateofreservation,
                            time: result._id.timeofreservation,
                            dblab: "GK101",
                            availableSeats: 30 - result.total
                            }));
                        }

                        // If no specific date or time is selected, add all possible options
                        if (!dateofreservation && !timeofreservation) {
                        allDates = generateDates(); // Returns dates from today up to 7 days
                        allTimes = generateTimes(); // Returns a list of all time slots

                        allDates.forEach(d => {
                            allTimes.forEach(t => {
                            if (!data.find(item => item.date === d && item.time === t)) {
                                data.push({
                                date: d,
                                time: t,
                                dblab: "GK101",
                                availableSeats: 30 // Assuming 30 seats are available if no reservations
                                });
                            }
                            });
                        });
                        } else if (!dateofreservation) {
                        // If no date is provided, add all times for the given time slots
                        allDates = generateDates(); // Returns dates from today up to 7 days

                        allDates.forEach(d => {
                            if (!data.find(item => item.date === d && item.time === timeofreservation)) {
                            data.push({
                                date: d,
                                time: timeofreservation,
                                dblab: "GK101",
                                availableSeats: 30 // Assuming 30 seats are available if no reservations
                            });
                            }
                        });
                        } else if (!timeofreservation) {
                        // If no time is provided, add all time slots for the given dates
                        allTimes = generateTimes(); // Returns a list of all time slots

                        allTimes.forEach(t => {
                            if (!data.find(item => item.date === dateofreservation && item.time === t)) {
                            data.push({
                                date: dateofreservation,
                                time: t,
                                dblab: "GK101",
                                availableSeats: 30 // Assuming 30 seats are available if no reservations
                            });
                            }
                        });
                        }

                        req.session.searchResults = data;
                        res.json({ data, redirectUrl: '/CT-View-Edit-search-view-only' });
                    } catch (error) {
                        console.error('Error:', error);
                        res.status(500).send('An error occurred');
                    }
                    break;

            

            case "Andrews":
                try {
                    // Build the match query dynamically
                    let matchQuery = {};
                    let allDates, allTimes;

                    if (dateofreservation && timeofreservation) {
                    // Both date and time are provided
                    matchQuery["reservations.dateofreservation"] = dateofreservation;
                    matchQuery["reservations.timeofreservation"] = timeofreservation;
                    } else if (dateofreservation) {
                    // Only date is provided
                    matchQuery["reservations.dateofreservation"] = dateofreservation;
                    matchQuery["reservations.timeofreservation"] = { $exists: true }; // Match all times on this date
                    } else if (timeofreservation) {
                    // Only time is provided
                    matchQuery["reservations.dateofreservation"] = { $exists: true }; // Match all dates for this time
                    matchQuery["reservations.timeofreservation"] = timeofreservation;
                    }

                    // Aggregation for Goks
                    const goksResults = await Goks.aggregate([
                    { $unwind: "$reservations" },
                    { $match: matchQuery },
                    { $group: {
                        _id: {
                            dateofreservation: "$reservations.dateofreservation",
                            timeofreservation: "$reservations.timeofreservation"
                        },
                        total: { $sum: 1 }
                        }
                    },
                    { $sort: { "_id.dateofreservation": 1, "_id.timeofreservation": 1 } }
                    ]);

                    // Map the results to include the available seats for each date-time combination
                    // If no results found, create default data
                    if (goksResults.length === 0) {
                        data = [{
                        date: dateofreservation || 'default date',
                        time: timeofreservation || 'default time',
                        dblab: "AG101",
                        availableSeats: 30
                        }];
                    } else {
                        // Map the results to include the available seats for each date-time combination
                        data = goksResults.map(result => ({
                        date: result._id.dateofreservation,
                        time: result._id.timeofreservation,
                        dblab: "AG101",
                        availableSeats: 30 - result.total
                        }));
                    }

                    // If no specific date or time is selected, add all possible options
                    if (!dateofreservation && !timeofreservation) {
                    allDates = generateDates(); // Returns dates from today up to 7 days
                    allTimes = generateTimes(); // Returns a list of all time slots

                    allDates.forEach(d => {
                        allTimes.forEach(t => {
                        if (!data.find(item => item.date === d && item.time === t)) {
                            data.push({
                            date: d,
                            time: t,
                            dblab: "AG101",
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                            });
                        }
                        });
                    });
                    } else if (!dateofreservation) {
                    // If no date is provided, add all times for the given time slots
                    allDates = generateDates(); // Returns dates from today up to 7 days

                    allDates.forEach(d => {
                        if (!data.find(item => item.date === d && item.time === timeofreservation)) {
                        data.push({
                            date: d,
                            time: timeofreservation,
                            dblab: "AG101",
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                        });
                        }
                    });
                    } else if (!timeofreservation) {
                    // If no time is provided, add all time slots for the given dates
                    allTimes = generateTimes(); // Returns a list of all time slots

                    allTimes.forEach(t => {
                        if (!data.find(item => item.date === dateofreservation && item.time === t)) {
                        data.push({
                            date: dateofreservation,
                            time: t,
                            dblab: "AG101",
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                        });
                        }
                    });
                    }

                    req.session.searchResults = data;
                    res.json({ data, redirectUrl: '/CT-View-Edit-search-view-only' });
                } catch (error) {
                    console.error('Error:', error);
                    res.status(500).send('An error occurred');
                }
                break;

            case "Velascos":
                try {
                    // Build the match query dynamically
                    let matchQuery = {};
                    let allDates, allTimes;

                    if (dateofreservation && timeofreservation) {
                    // Both date and time are provided
                    matchQuery["reservations.dateofreservation"] = dateofreservation;
                    matchQuery["reservations.timeofreservation"] = timeofreservation;
                    } else if (dateofreservation) {
                    // Only date is provided
                    matchQuery["reservations.dateofreservation"] = dateofreservation;
                    matchQuery["reservations.timeofreservation"] = { $exists: true }; // Match all times on this date
                    } else if (timeofreservation) {
                    // Only time is provided
                    matchQuery["reservations.dateofreservation"] = { $exists: true }; // Match all dates for this time
                    matchQuery["reservations.timeofreservation"] = timeofreservation;
                    }

                    // Aggregation for Goks
                    const goksResults = await Goks.aggregate([
                    { $unwind: "$reservations" },
                    { $match: matchQuery },
                    { $group: {
                        _id: {
                            dateofreservation: "$reservations.dateofreservation",
                            timeofreservation: "$reservations.timeofreservation"
                        },
                        total: { $sum: 1 }
                        }
                    },
                    { $sort: { "_id.dateofreservation": 1, "_id.timeofreservation": 1 } }
                    ]);

                    // Map the results to include the available seats for each date-time combination
                    // If no results found, create default data
                    if (goksResults.length === 0) {
                        data = [{
                        date: dateofreservation || 'default date',
                        time: timeofreservation || 'default time',
                        dblab: "VL101",
                        availableSeats: 30
                        }];
                    } else {
                        // Map the results to include the available seats for each date-time combination
                        data = goksResults.map(result => ({
                        date: result._id.dateofreservation,
                        time: result._id.timeofreservation,
                        dblab: "VL101",
                        availableSeats: 30 - result.total
                        }));
                    }

                    // If no specific date or time is selected, add all possible options
                    if (!dateofreservation && !timeofreservation) {
                    allDates = generateDates(); // Returns dates from today up to 7 days
                    allTimes = generateTimes(); // Returns a list of all time slots

                    allDates.forEach(d => {
                        allTimes.forEach(t => {
                        if (!data.find(item => item.date === d && item.time === t)) {
                            data.push({
                            date: d,
                            time: t,
                            dblab: "VL101",
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                            });
                        }
                        });
                    });
                    } else if (!dateofreservation) {
                    // If no date is provided, add all times for the given time slots
                    allDates = generateDates(); // Returns dates from today up to 7 days

                    allDates.forEach(d => {
                        if (!data.find(item => item.date === d && item.time === timeofreservation)) {
                        data.push({
                            date: d,
                            time: timeofreservation,
                            dblab: "VL101",
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                        });
                        }
                    });
                    } else if (!timeofreservation) {
                    // If no time is provided, add all time slots for the given dates
                    allTimes = generateTimes(); // Returns a list of all time slots

                    allTimes.forEach(t => {
                        if (!data.find(item => item.date === dateofreservation && item.time === t)) {
                        data.push({
                            date: dateofreservation,
                            time: t,
                            dblab: "VL101",
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                        });
                        }
                    });
                    }

                    req.session.searchResults = data;
                    res.json({ data, redirectUrl: '/CT-View-Edit-search-view-only' });
                } catch (error) {
                    console.error('Error:', error);
                    res.status(500).send('An error occurred');
                }
                break;

            default:
                res.status(400).send('Invalid lab specified');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});

app.get('/login-page', function(req, res) {
    res.render('login-page');
});

app.get('/signup-student', function(req, res) {
    res.render('signup-student');
});

app.get('/signup-labtechnician', function(req, res) {
    res.render('signup-labtechnician');
});

app.get('/CT-homepage', ensureAuthenticated, async(req, res) =>{
    try{
        const user = await Users.findById(req.session.userId).lean();
        if (user && user.title === 'Student') {
            res.sendFile(__dirname + '/CT/CT-homepage.html');
        } else {
            res.redirect('/'); // Redirect to login or an appropriate page
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error!');
    }
});

/*--------------------------   CT  MENU    ---------------------------*/
// Displays the reservations in combinedReservations
// Note: For CT, checks if 'session.user.fullName' === 'combinedCollections.reservation.name'
app.get('/CT-View-Edit', async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }

        const userId = req.session.userId;
        const user = await Users.findById(userId).lean();
        const userName = user.fullName;

        // Fetch all seat data from Andrew, Goks, and Velasco collections
        const [andrewSeats, goksSeats, velascoSeats] = await Promise.all([
            Andrew.find().lean(),
            Goks.find().lean(),
            Velasco.find().lean()
        ]);

        // Flatten the reservations data
        const flattenReservations = (seats) => {
            return seats.flatMap(seat => 
                seat.reservations.map(reservation => ({
                    seat: seat.seat,
                    ...reservation
                }))
            );
        };

        // Combine and flatten all reservations
        const combinedReservations = [
            ...flattenReservations(andrewSeats),
            ...flattenReservations(goksSeats),
            ...flattenReservations(velascoSeats)
        ];

        const filteredReservations = [];
        for (const reservation of combinedReservations) {
            if (reservation.name === userName) {
                filteredReservations.push(reservation); // push filtered reservations by userName to temp array 'filteredReservations'
            }
        }

        // Render the template with the formatted data
        res.render('CT-View-Edit', { reservations: filteredReservations });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

// Displays the reservations in combinedReservations
app.get('/LT-View-Edit', async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }

        const userId = req.session.userId;
        const user = await Users.findById(userId).lean();
        const userName = user.fullName;

        // Fetch all seat data from Andrew, Goks, and Velasco collections
        const [andrewSeats, goksSeats, velascoSeats] = await Promise.all([
            Andrew.find().lean(),
            Goks.find().lean(),
            Velasco.find().lean()
        ]);

        // Flatten the reservations data
        const flattenReservations = (seats) => {
            return seats.flatMap(seat => 
                seat.reservations.map(reservation => ({
                    seat: seat.seat,
                    ...reservation
                }))
            );
        };

        // Combine and flatten all reservations
        const combinedReservations = [
            ...flattenReservations(andrewSeats),
            ...flattenReservations(goksSeats),
            ...flattenReservations(velascoSeats)
        ];

        // Render the template with the formatted data
        res.render('LT-View-Edit', { reservations: combinedReservations });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

/*--------------------------   EDIT RESERVATION    ---------------------------*/
app.get('/CT-View-Edit_edit-reservation/:reservationId', async (req, res) =>{
    //res.sendFile(__dirname + '/CT/CT-View-Edit_edit-reservation.html');

    try {
        
        const userId = req.session.userId; // Assuming userId is stored in session

        // Fetch user data
        const user = await Users.findById(userId).lean(); // Assuming Users is your user model
        const { reservationId } = req.params;
        let reservationDetails = null;
        
        const seatCollections = [Andrew, Goks, Velasco];

        for (const SeatModel of seatCollections){
            const seat = await SeatModel.findOne({ 'reservations._id': reservationId});
            if (seat){
                const reservation = seat.reservations.id(reservationId);
                if (reservation){

                    reservationDetails = {
                        seatNames: seat.seat,
                        lab: SeatModel.modelName,
                        ...reservation.toObject()

                    };
                }
            }
        }

        let seatOptions = [];

        if (reservationDetails.lab == "Goks"){
            seatOptions = Array.from({ length: 30 }, (_, i) => `GK${String(i+1).padStart(2,'0')}`);
        }
        else if (reservationDetails.lab == "Andrew"){
            seatOptions = Array.from({ length: 30 }, (_, i) => `A${String(i+1).padStart(2,'0')}`);
        }
        else if (reservationDetails.lab == "Velasco"){
            seatOptions = Array.from({ length: 30 }, (_, i) => `VL${String(i+1).padStart(2,'0')}`);
        }
        console.log(reservationDetails);
        if (reservationDetails){
        // Render the reservation details page with user and reservationData
        res.render('CT-View-Edit_edit-reservation', {user, reservationData: reservationDetails, seatOptions});
        }
    }catch(err){
        console.error(err);
        res.status(500).send('An error occurred!!');
    }
});

app.get('/LT-View-Edit_edit-reservation/:reservationId', async (req, res) =>{
    //res.sendFile(__dirname + '/LT/LT-View-Edit_edit-reservation.html');

    try {
        
        const userId = req.session.userId; // Assuming userId is stored in session

        // Fetch user data
        const user = await Users.findById(userId).lean(); // Assuming Users is your user model
        const { reservationId } = req.params;
        let reservationDetails = null;
        
        const seatCollections = [Andrew, Goks, Velasco];

        for (const SeatModel of seatCollections){
            const seat = await SeatModel.findOne({ 'reservations._id': reservationId});
            if (seat){
                const reservation = seat.reservations.id(reservationId);
                if (reservation){

                    reservationDetails = {
                        seatNames: seat.seat,
                        lab: SeatModel.modelName,
                        ...reservation.toObject()

                    };
                }
            }
        }

        let seatOptions = [];

        if (reservationDetails.lab == "Goks"){
            seatOptions = Array.from({ length: 30 }, (_, i) => `GK${String(i+1).padStart(2,'0')}`);
        }
        else if (reservationDetails.lab == "Andrew"){
            seatOptions = Array.from({ length: 30 }, (_, i) => `A${String(i+1).padStart(2,'0')}`);
        }
        else if (reservationDetails.lab == "Velasco"){
            seatOptions = Array.from({ length: 30 }, (_, i) => `VL${String(i+1).padStart(2,'0')}`);
        }
        console.log(reservationDetails);
        if (reservationDetails){
        // Render the reservation details page with user and reservationData
        res.render('LT-View-Edit_edit-reservation', {user, reservationData: reservationDetails, seatOptions});
        }
    }catch(err){
        console.error(err);
        res.status(500).send('An error occurred!!');
    }
});
/*
app.post('/editReservation', async (req, res) => {
    const data = req.body;
    console.log(data);
});*/
app.post('/CT_Edit-Reservation/:reservationId', async (req, res) => {
    const data = req.body;
    console.log('Request body:', req.body);
    const { reservationId } = req.params;
    console.log('Reservation ID:', req.params.reservationId);

    if (!Array.isArray(data.seatNames) || data.seatNames.length !== 1) {
        return res.status(400).send('seatNames should be an array with one seat name');
    }

    try {
        const newSeatName = data.seatNames[0];
        const seatCollections = [Andrew, Goks, Velasco];
        let reservationFound = false;
        let isSeatAvailable = true;

        let originalReservation = null;
        let originalSeat = null;

//Updating

        for (const SeatModel of seatCollections) {
            const seat = await SeatModel.findOne({ 'reservations._id': reservationId });
            if (seat) {
                const reservation = seat.reservations.id(reservationId);

                if (reservation) {
                    // Remove the original reservation
                    seat.reservations = seat.reservations.filter(res => res._id.toString() !== reservationId);
                    await seat.save();

                    // Add new reservation
                    const filter = { seat: newSeatName };
                    const update = {
                        $push: {
                            reservations: {
                                name: data.fullName,
                                reservedby: data.fullName,
                                anonymous: data.anonymous,
                                dateofrequest: data.dateofrequest,
                                timeofrequest: data.timeofrequest,
                                dateofreservation: data.dateofreservation,
                                timeofreservation: data.timeofreservation,
                                value: 1
                            }
                        }
                    };

                    let updatePromise;
                    if (data.dblab === "Andrew") {
                        updatePromise = Andrew.findOneAndUpdate(filter, update, { new: true });
                    } else if (data.dblab === "Goks") {
                        updatePromise = Goks.findOneAndUpdate(filter, update, { new: true });
                    } else if (data.dblab === "Velasco") {
                        updatePromise = Velasco.findOneAndUpdate(filter, update, { new: true });
                    } else {
                        throw new Error(`Unsupported dblab value: ${data.dblab}`);
                    }

                    await updatePromise;
                    reservationFound = true;

                    req.session.editSuccessData = {
                        seatNames:newSeatName,
                        lab:data.dblab,
                        ...data
                    };

                    break;
                }
            }
        }

        if (reservationFound) {
           // res.status(200).send('Reservation edited successfully');
           res.redirect('/CT-View-Edit_success-edit');

        } else {
            res.status(404).send('Original reservation not found');
        }
    } catch (err) {
        console.error('Error in editing reservation:', err);
        res.status(500).send('An error occurred while editing the reservation');
    }
});

app.post('/LT_Edit-Reservation/:reservationId', async (req, res) => {
    const data = req.body;
    console.log('Request body:', req.body);
    const { reservationId } = req.params;
    console.log('Reservation ID:', req.params.reservationId);

    if (!Array.isArray(data.seatNames) || data.seatNames.length !== 1) {
        return res.status(400).send('seatNames should be an array with one seat name');
    }

    try {
        const newSeatName = data.seatNames[0];
        const seatCollections = [Andrew, Goks, Velasco];
        let reservationFound = false;
        let isSeatAvailable = true;

        let originalReservation = null;
        let originalSeat = null;

//Updating

        for (const SeatModel of seatCollections) {
            const seat = await SeatModel.findOne({ 'reservations._id': reservationId });
            if (seat) {
                const reservation = seat.reservations.id(reservationId);

                if (reservation) {
                    // Remove the original reservation
                    seat.reservations = seat.reservations.filter(res => res._id.toString() !== reservationId);
                    await seat.save();

                    // Add new reservation
                    const filter = { seat: newSeatName };
                    const update = {
                        $push: {
                            reservations: {
                                name: data.fullName,
                                reservedby: data.fullName,
                                anonymous: data.anonymous,
                                dateofrequest: data.dateofrequest,
                                timeofrequest: data.timeofrequest,
                                dateofreservation: data.dateofreservation,
                                timeofreservation: data.timeofreservation,
                                value: 1
                            }
                        }
                    };

                    let updatePromise;
                    if (data.dblab === "Andrew") {
                        updatePromise = Andrew.findOneAndUpdate(filter, update, { new: true });
                    } else if (data.dblab === "Goks") {
                        updatePromise = Goks.findOneAndUpdate(filter, update, { new: true });
                    } else if (data.dblab === "Velasco") {
                        updatePromise = Velasco.findOneAndUpdate(filter, update, { new: true });
                    } else {
                        throw new Error(`Unsupported dblab value: ${data.dblab}`);
                    }

                    await updatePromise;
                    reservationFound = true;

                    req.session.editSuccessData = {
                        seatNames:newSeatName,
                        lab:data.dblab,
                        ...data
                    };

                    break;
                }
            }
        }

        if (reservationFound) {
           // res.status(200).send('Reservation edited successfully');
           res.redirect('/LT-View-Edit_success-edit');

        } else {
            res.status(404).send('Original reservation not found');
        }
    } catch (err) {
        console.error('Error in editing reservation:', err);
        res.status(500).send('An error occurred while editing the reservation');
    }
});



// CT View Edit Success
/*
app.post('/CT-View-Edit_success-edit', (req, res) => {
    data = req.body;
    res.status(200).send('Reservation data received');
});*/

app.get('/CT-View-Edit_success-edit', function(req, res) {
    const data = req.session.editSuccessData || {};
    res.render('CT-View-Edit_success-edit', data);
});

// LT View Edit Success
/*
app.post('/LT-View-Edit_success-edit', (req, res) => {
    data = req.body;
    res.render('LT-View-Edit_success-edit', data);
});*/

app.get('/LT-View-Edit_success-edit', function(req, res) {
    const data = req.session.editSuccessData || {};
    res.render('LT-View-Edit_success-edit', data);
});

/*--------------------------   CANCEL RESERVATION    ---------------------------*/
app.delete('/LT-cancel-reservation/:reservationId', async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }

        const { reservationId } = req.params;
        const { currentTime } = req.body;
        const currentTimeConst = new Date(currentTime);
        console.log(`Current Time: ${currentTimeConst}`);

        const combinedReservations = [Andrew, Goks, Velasco];
        let seatFound = false;

        for (const SeatModel of combinedReservations) {
            const seat = await SeatModel.findOne({ 'reservations._id': reservationId });
            if (seat) {
                const reservation = seat.reservations.find(res => res._id.toString() === reservationId);
                if (reservation) {

                    const reservationDate = reservation.dateofreservation;
                    const reservationTimeRange = reservation.timeofreservation;

                    // use split() func to split the string of the 'timeofreservation' (11:00PM-11:30PM) into an array of 2,, [0] to access first part of the splitted string 
                    const reservationStartTime = reservationTimeRange.split('-')[0];

                    // split date format: 2024-07-29
                    const dateParts = reservationDate.split('-');
                    const year = parseInt(dateParts[0]);
                    const month = parseInt(dateParts[1]) - 1; // months starts at 0
                    const day = parseInt(dateParts[2]);

                    // split time format: 10:30AM
                    const timeParts = reservationStartTime.match(/(\d+):(\d+)(AM|PM)/i); // i for case insensitivity
                    const hour = parseInt(timeParts[1]);
                    const minute = parseInt(timeParts[2]);
                    const period = timeParts[3].toUpperCase();

                    // fix hour to 24 hour format
                    let hourConverted;
                    if (period === 'PM' && hour !== 12) {
                        hourConverted = hour + 12;
                    } else if (period === 'AM' && hour === 12) {
                        hourConverted = 0;
                    } else {
                        hourConverted = hour;
                    }
                    
                    const reservationDateTime = new Date(year, month, day, hourConverted, minute);
                    const timeDifference = (currentTimeConst - reservationDateTime) / 1000 / 60; // miliseconds -> seconds -> minutes

                    if (timeDifference >= 10) {
                        seat.reservations = seat.reservations.filter(res => res._id.toString() !== reservationId);
                        await seat.save();
                        seatFound = true;
                        break;
                    } else {
                        return res.status(403).send('Reservation can only be canceled after 10 minutes of the reservation time');
                    }
                }
            }
        }

        if (seatFound) {
            res.status(200).send('Reservation canceled successfully');
        } else {
            res.status(404).send('Reservation not found');
        }
    } catch (err) {
        console.error('An error occurred:', err);
        res.status(500).send('An error occurred');
    }
});

// Searches for reservation in combinedCollections (combined 3 collections) and deletes it; the URL parameter 'reservationId' is passed to this method 
// Note: For CT, checks if 'combinedCollections.seat.reservedby' === 'user.session.fullName'
app.delete('/CT-cancel-reservation/:reservationId', async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }

        const userId = req.session.userId;
        const user = await Users.findById(userId).lean();
        const userName = user.fullName;

        const { reservationId } = req.params;
        let seatFound = false;

        // Check all seat collections
        const combinedReservations = [Andrew, Goks, Velasco];

        for (const SeatModel of combinedReservations) {
            const seat = await SeatModel.findOne({ 'reservations._id': reservationId });
            if (seat) {
                // Find the reservation in the seat
                const reservation = seat.reservations.id(reservationId);

                // console.log(`Found reservation: ${reservation}`);
                // console.log(`User's name: ${userName}`);
                // console.log(`Reservation's reservedby: ${reservation.reservedby}`);

                // Check if the reservation's reservedby field matches the current user's name
                if (reservation && reservation.reservedby === userName) {
                    seat.reservations = seat.reservations.filter(res => res._id.toString() !== reservationId);
                    await seat.save();
                    seatFound = true;
                    break;
                } else {
                    return res.status(403).send('Unauthorized Cancellation.');
                }
            }
        }

        if (seatFound) {
            res.status(200).send('Reservation canceled successfully');
        } else {
            res.status(404).send('Reservation not found');
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('An error occurred');
    }
});

// POST route to receive reservation data
app.post('/CT-View-Edit_reservation-details', async (req, res) => {
    try {
        reservationData = req.body;
        user = req.session.userId;

        res.status(200).send('Reservation data received');
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

// GET route to render reservation details
app.get('/CT-View-Edit_reservation-details', async (req, res) => {
    try {
        const userId = req.session.userId; // Assuming userId is stored in session

        // Fetch user data
        const user = await Users.findById(userId).lean(); // Assuming Users is your user model

        // Render the reservation details page with user and reservationData
        res.render('CT-View-Edit_reservation-details', {user, reservationData});
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
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

        // Fetch and add lab property to reservations from each collection
        const andrewReservations = (await Andrew.find({ 'reservations.name': user.fullName }).lean()).flatMap(doc => 
            doc.reservations.filter(res => res.name === user.fullName).map(res => ({ ...res, lab: 'AG101', seat: doc.seat }))
        );

        const goksReservations = (await Goks.find({ 'reservations.name': user.fullName }).lean()).flatMap(doc => 
            doc.reservations.filter(res => res.name === user.fullName).map(res => ({ ...res, lab: 'GK101', seat: doc.seat }))
        );

        const velascoReservations = (await Velasco.find({ 'reservations.name': user.fullName }).lean()).flatMap(doc => 
            doc.reservations.filter(res => res.name === user.fullName).map(res => ({ ...res, lab: 'VL101', seat: doc.seat }))
        );

        // Combine all reservations
        const allReservations = [
            ...andrewReservations,
            ...goksReservations,
            ...velascoReservations,
        ];

        // Pass user and all reservations to the template
        res.render('CT-Profile', { user, reservations: allReservations });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

app.delete('/deleteAccount', async (req, res) => {
    try {
        const userId = req.session.userId;
        if (!userId) {
            return res.status(401).send({ message: 'User not authenticated' });
        }

        const user = await Users.findByIdAndDelete(userId).lean();
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        const userName = user.fullName;

        const deleteReservationsByUserName = async (collection, labName) => {
            const seats = await collection.find({ 'reservations.name': userName }).lean();

            for (const seat of seats) {
                const updatedReservations = seat.reservations.filter(res => res.name !== userName);

                await collection.updateOne({ _id: seat._id }, { reservations: updatedReservations });
            }
        };

        await deleteReservationsByUserName(Andrew, 'AG101');
        await deleteReservationsByUserName(Goks, 'GK101');
        await deleteReservationsByUserName(Velasco, 'VL101');

        req.session.destroy(err => {
            if (err) {
                console.error('Error destroying session:', err);
                return res.status(500).send({ message: 'Failed to delete account' });
            }

            res.status(200).send({ message: 'Account and reservations deleted successfully' });
        });
    } catch (error) {
        console.error('Error deleting account:', error);
        res.status(500).send('Server Error');
    }
});

/*-----------------------    CT PROFILE EDIT   --------------------------*/ 
app.get('/CT-Profile_edit', async (req, res) => {
    try {
        const userId = req.session.userId; // Assuming userId is stored in session
        const user = await Users.findById(userId).lean(); // Fetch user data

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.render('CT-Profile_edit', { user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.post('/CT-Profile_edit', async (req, res) => {
    try {
        const userId = req.session.userId;
        const { description } = req.body;

        // Update user's description in the database
        await Users.findByIdAndUpdate(userId, { description });

        // Handle file upload if profile photo is changed
        if (req.files && req.files.profilePhoto) {
            const profilePhoto = req.files.profilePhoto;
            const uploadPath = path.join(__dirname, 'images', profilePhoto.name);

            console.log(`Uploading file to: ${uploadPath}`);

            // Move the uploaded file to the designated path
            profilePhoto.mv(uploadPath, async (err) => {
                if (err) {
                    console.error('File upload error:', err);
                    return res.status(500).send('File upload failed');
                }

                // Update user's profile photo path in the database
                await Users.findByIdAndUpdate(userId, { profilePhoto: '/images/' + profilePhoto.name });

                console.log('File uploaded and user updated successfully');
                res.redirect('/CT-Profile'); 
            });
        } else {
            res.redirect('/CT-Profile'); // Redirect to profile page if no file upload
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).send('Server Error');
    }
});

/*-----------------------  CT Profile Search/View   --------------------------*/
// Fetches and renders user's profile based on their userId
app.get('/CT-Profile_view-only', async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }

        const user = await Users.findById(req.query.userId).lean();
        const userName = user.fullName;

        if (!user) {
            // Error Handling: redirects to same URL page w/ an error query from search.js 
            const currentUrl = req.headers.referer; // Use referer header to get the current URL
            const url = new URL(currentUrl, `http://${req.headers.host}`);
            url.searchParams.set('error', 'UserNotFound');
            return res.redirect(url.href); 
        }

        // Fetch and add lab property to reservations from each collection
        const andrewReservations = (await Andrew.find({ 'reservations.name': user.fullName }).lean()).flatMap(doc => 
            doc.reservations.filter(res => res.name === user.fullName).map(res => ({ ...res, lab: 'AG101', seat: doc.seat }))
        );

        const goksReservations = (await Goks.find({ 'reservations.name': user.fullName }).lean()).flatMap(doc => 
            doc.reservations.filter(res => res.name === user.fullName).map(res => ({ ...res, lab: 'GK101', seat: doc.seat }))
        );

        const velascoReservations = (await Velasco.find({ 'reservations.name': user.fullName }).lean()).flatMap(doc => 
            doc.reservations.filter(res => res.name === user.fullName).map(res => ({ ...res, lab: 'VL101', seat: doc.seat }))
        );

        // Combine all reservations
        const allReservations = [
            ...andrewReservations,
            ...goksReservations,
            ...velascoReservations,
        ];

        res.render('CT-Profile_view-only', { user, reservations: allReservations });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

// Searches a user by name. if found, redirect to user's profile page, otherwise, redirects to same page w/ error alert.
// Note: the 'name' URL is passed to /search sending a GET request ('search?name=Mari%20Santos'), and extracts the 'name' query parameter from the URL
app.get('/search', async (req, res) => {
    const name = req.query.name.trim().toLowerCase();   // 'name' is trimmed and assigned to 'const name'

    try {
        // Fetch all users and search a match w/ user.fullName
        const allusers = await Users.find({}).lean();
        const user = allusers.find(user => user.fullName.toLowerCase() === name); 
        
        if (!user) {
            // Error Handling: redirects to same URL page w/ an error query from search.js 
            const currentUrl = req.headers.referer; // Use referer header to get the current URL
            const url = new URL(currentUrl, `http://${req.headers.host}`);
            url.searchParams.set('error', 'UserNotFound');
            return res.redirect(url.href); 
        }
        // Redirect to profile page with the found user's _id
        res.redirect(`/CT-Profile_view-only?userId=${user._id}`);
    } catch (error) {
        console.error('Error searching for user:', error);
        res.status(500).send('Internal server error');
    }
});

// Fetches all the users, except the current user in the session.
app.get('/users-for-search', async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }
        const currentUserId = req.session.userId;
        const user = await Users.find({ _id: { $ne: currentUserId } }).lean();
        if (!user) {
            // Error Handling: redirects to same URL page w/ an error query from search.js 
            const currentUrl = req.headers.referer; // Use referer header to get the current URL
            const url = new URL(currentUrl, `http://${req.headers.host}`);
            url.searchParams.set('error', 'UserNotFound');
            return res.redirect(url.href);
        }

        res.json(user);
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

// CT Reservation Search
app.get('/CT-Reservation_search-goks', function(req, res) {
    const data = req.session.searchResults;
    res.render('CT-Reservation_search-goks', { data });
});

app.get('/CT-Reservation_search-andrew', function(req, res) {
    const data = req.session.searchResults;
    if (!data) {
        return res.status(404).send('No search results found');
    }
    res.render('CT-Reservation_search-andrew', { data });
});

app.get('/CT-Reservation_search-velasco', function(req, res) {
    const data = req.session.searchResults;
    if (!data) {
        return res.status(404).send('No search results found');
    }
    res.render('CT-Reservation_search-velasco', { data });
});


app.post('/getSearch', async (req, res) => {
    try {
        const { dblab, dateofreservation, timeofreservation } = req.body;
        let data;


        switch (dblab) {
            case "Goks":
                    try {
                        // Build the match query dynamically
                        let matchQuery = {};
                        let allDates, allTimes;

                        if (dateofreservation && timeofreservation) {
                        // Both date and time are provided
                        matchQuery["reservations.dateofreservation"] = dateofreservation;
                        matchQuery["reservations.timeofreservation"] = timeofreservation;
                        } else if (dateofreservation) {
                        // Only date is provided
                        matchQuery["reservations.dateofreservation"] = dateofreservation;
                        matchQuery["reservations.timeofreservation"] = { $exists: true }; // Match all times on this date
                        } else if (timeofreservation) {
                        // Only time is provided
                        matchQuery["reservations.dateofreservation"] = { $exists: true }; // Match all dates for this time
                        matchQuery["reservations.timeofreservation"] = timeofreservation;
                        }

                        // Aggregation for Goks
                        const goksResults = await Goks.aggregate([
                        { $unwind: "$reservations" },
                        { $match: matchQuery },
                        { $group: {
                            _id: {
                                dateofreservation: "$reservations.dateofreservation",
                                timeofreservation: "$reservations.timeofreservation"
                            },
                            total: { $sum: 1 }
                            }
                        },
                        { $sort: { "_id.dateofreservation": 1, "_id.timeofreservation": 1 } }
                        ]);

                        // Map the results to include the available seats for each date-time combination
                        // If no results found, create default data
                        if (goksResults.length === 0) {
                            data = [{
                            date: dateofreservation || 'default date',
                            time: timeofreservation || 'default time',
                            availableSeats: 30
                            }];
                        } else {
                            // Map the results to include the available seats for each date-time combination
                            data = goksResults.map(result => ({
                            date: result._id.dateofreservation,
                            time: result._id.timeofreservation,
                            availableSeats: 30 - result.total
                            }));
                        }

                        // If no specific date or time is selected, add all possible options
                        if (!dateofreservation && !timeofreservation) {
                        allDates = generateDates(); // Returns dates from today up to 7 days
                        allTimes = generateTimes(); // Returns a list of all time slots

                        allDates.forEach(d => {
                            allTimes.forEach(t => {
                            if (!data.find(item => item.date === d && item.time === t)) {
                                data.push({
                                date: d,
                                time: t,
                                availableSeats: 30 // Assuming 30 seats are available if no reservations
                                });
                            }
                            });
                        });
                        } else if (!dateofreservation) {
                        // If no date is provided, add all times for the given time slots
                        allDates = generateDates(); // Returns dates from today up to 7 days

                        allDates.forEach(d => {
                            if (!data.find(item => item.date === d && item.time === timeofreservation)) {
                            data.push({
                                date: d,
                                time: timeofreservation,
                                availableSeats: 30 // Assuming 30 seats are available if no reservations
                            });
                            }
                        });
                        } else if (!timeofreservation) {
                        // If no time is provided, add all time slots for the given dates
                        allTimes = generateTimes(); // Returns a list of all time slots

                        allTimes.forEach(t => {
                            if (!data.find(item => item.date === dateofreservation && item.time === t)) {
                            data.push({
                                date: dateofreservation,
                                time: t,
                                availableSeats: 30 // Assuming 30 seats are available if no reservations
                            });
                            }
                        });
                        }

                        req.session.searchResults = data;
                        res.json({ data, redirectUrl: '/CT-Reservation_search-goks' });
                    } catch (error) {
                        console.error('Error:', error);
                        res.status(500).send('An error occurred');
                    }
                    break;

            

            case "Andrews":
                try {
                    // Build the match query dynamically
                    let matchQuery = {};
                    let allDates, allTimes;

                    if (dateofreservation && timeofreservation) {
                    // Both date and time are provided
                    matchQuery["reservations.dateofreservation"] = dateofreservation;
                    matchQuery["reservations.timeofreservation"] = timeofreservation;
                    } else if (dateofreservation) {
                    // Only date is provided
                    matchQuery["reservations.dateofreservation"] = dateofreservation;
                    matchQuery["reservations.timeofreservation"] = { $exists: true }; // Match all times on this date
                    } else if (timeofreservation) {
                    // Only time is provided
                    matchQuery["reservations.dateofreservation"] = { $exists: true }; // Match all dates for this time
                    matchQuery["reservations.timeofreservation"] = timeofreservation;
                    }

                    // Aggregation for Goks
                    const goksResults = await Andrew.aggregate([
                    { $unwind: "$reservations" },
                    { $match: matchQuery },
                    { $group: {
                        _id: {
                            dateofreservation: "$reservations.dateofreservation",
                            timeofreservation: "$reservations.timeofreservation"
                        },
                        total: { $sum: 1 }
                        }
                    },
                    { $sort: { "_id.dateofreservation": 1, "_id.timeofreservation": 1 } }
                    ]);

                    // Map the results to include the available seats for each date-time combination
                    // If no results found, create default data
                    if (goksResults.length === 0) {
                        data = [{
                        date: dateofreservation || 'default date',
                        time: timeofreservation || 'default time',
                        availableSeats: 30
                        }];
                    } else {
                        // Map the results to include the available seats for each date-time combination
                        data = goksResults.map(result => ({
                        date: result._id.dateofreservation,
                        time: result._id.timeofreservation,
                        availableSeats: 30 - result.total
                        }));
                    }

                    // If no specific date or time is selected, add all possible options
                    if (!dateofreservation && !timeofreservation) {
                    allDates = generateDates(); // Returns dates from today up to 7 days
                    allTimes = generateTimes(); // Returns a list of all time slots

                    allDates.forEach(d => {
                        allTimes.forEach(t => {
                        if (!data.find(item => item.date === d && item.time === t)) {
                            data.push({
                            date: d,
                            time: t,
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                            });
                        }
                        });
                    });
                    } else if (!dateofreservation) {
                    // If no date is provided, add all times for the given time slots
                    allDates = generateDates(); // Returns dates from today up to 7 days

                    allDates.forEach(d => {
                        if (!data.find(item => item.date === d && item.time === timeofreservation)) {
                        data.push({
                            date: d,
                            time: timeofreservation,
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                        });
                        }
                    });
                    } else if (!timeofreservation) {
                    // If no time is provided, add all time slots for the given dates
                    allTimes = generateTimes(); // Returns a list of all time slots

                    allTimes.forEach(t => {
                        if (!data.find(item => item.date === dateofreservation && item.time === t)) {
                        data.push({
                            date: dateofreservation,
                            time: t,
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                        });
                        }
                    });
                    }

                    req.session.searchResults = data;
                    res.json({ data, redirectUrl: '/CT-Reservation_search-andrew' });
                } catch (error) {
                    console.error('Error:', error);
                    res.status(500).send('An error occurred');
                }
                break;

            case "Velascos":
                try {
                    // Build the match query dynamically
                    let matchQuery = {};
                    let allDates, allTimes;

                    if (dateofreservation && timeofreservation) {
                    // Both date and time are provided
                    matchQuery["reservations.dateofreservation"] = dateofreservation;
                    matchQuery["reservations.timeofreservation"] = timeofreservation;
                    } else if (dateofreservation) {
                    // Only date is provided
                    matchQuery["reservations.dateofreservation"] = dateofreservation;
                    matchQuery["reservations.timeofreservation"] = { $exists: true }; // Match all times on this date
                    } else if (timeofreservation) {
                    // Only time is provided
                    matchQuery["reservations.dateofreservation"] = { $exists: true }; // Match all dates for this time
                    matchQuery["reservations.timeofreservation"] = timeofreservation;
                    }

                    // Aggregation for Goks
                    const goksResults = await Velasco.aggregate([
                    { $unwind: "$reservations" },
                    { $match: matchQuery },
                    { $group: {
                        _id: {
                            dateofreservation: "$reservations.dateofreservation",
                            timeofreservation: "$reservations.timeofreservation"
                        },
                        total: { $sum: 1 }
                        }
                    },
                    { $sort: { "_id.dateofreservation": 1, "_id.timeofreservation": 1 } }
                    ]);

                    // Map the results to include the available seats for each date-time combination
                    // If no results found, create default data
                    if (goksResults.length === 0) {
                        data = [{
                        date: dateofreservation || 'default date',
                        time: timeofreservation || 'default time',
                        availableSeats: 30
                        }];
                    } else {
                        // Map the results to include the available seats for each date-time combination
                        data = goksResults.map(result => ({
                        date: result._id.dateofreservation,
                        time: result._id.timeofreservation,
                        availableSeats: 30 - result.total
                        }));
                    }

                    // If no specific date or time is selected, add all possible options
                    if (!dateofreservation && !timeofreservation) {
                    allDates = generateDates(); // Returns dates from today up to 7 days
                    allTimes = generateTimes(); // Returns a list of all time slots

                    allDates.forEach(d => {
                        allTimes.forEach(t => {
                        if (!data.find(item => item.date === d && item.time === t)) {
                            data.push({
                            date: d,
                            time: t,
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                            });
                        }
                        });
                    });
                    } else if (!dateofreservation) {
                    // If no date is provided, add all times for the given time slots
                    allDates = generateDates(); // Returns dates from today up to 7 days

                    allDates.forEach(d => {
                        if (!data.find(item => item.date === d && item.time === timeofreservation)) {
                        data.push({
                            date: d,
                            time: timeofreservation,
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                        });
                        }
                    });
                    } else if (!timeofreservation) {
                    // If no time is provided, add all time slots for the given dates
                    allTimes = generateTimes(); // Returns a list of all time slots

                    allTimes.forEach(t => {
                        if (!data.find(item => item.date === dateofreservation && item.time === t)) {
                        data.push({
                            date: dateofreservation,
                            time: t,
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                        });
                        }
                    });
                    }

                    req.session.searchResults = data;
                    res.json({ data, redirectUrl: '/CT-Reservation_search-velasco' });
                } catch (error) {
                    console.error('Error:', error);
                    res.status(500).send('An error occurred');
                }
                break;

            default:
                res.status(400).send('Invalid lab specified');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
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

        // Fetch and add lab property to reservations from each collection
        const andrewReservations = (await Andrew.find({ 'reservations.reservedby': user.fullName }).lean()).flatMap(doc => 
            doc.reservations.filter(res => res.reservedby === user.fullName).map(res => ({ ...res, lab: 'AG101', seat: doc.seat }))
        );

        const goksReservations = (await Goks.find({ 'reservations.reservedby': user.fullName }).lean()).flatMap(doc => 
            doc.reservations.filter(res => res.reservedby === user.fullName).map(res => ({ ...res, lab: 'GK101', seat: doc.seat }))
        );

        const velascoReservations = (await Velasco.find({ 'reservations.reservedby': user.fullName }).lean()).flatMap(doc => 
            doc.reservations.filter(res => res.reservedby === user.fullName).map(res => ({ ...res, lab: 'VL101', seat: doc.seat }))
        );

        // Combine all reservations
        const allReservations = [
            ...andrewReservations,
            ...goksReservations,
            ...velascoReservations,
        ];

        // Pass user and all reservations to the template
        res.render('LT-Profile', { user, reservations: allReservations });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

/*-----------------------    LT PROFILE EDIT   --------------------------*/ 
app.get('/LT-Profile_edit', async (req, res) => {
    try {
        const userId = req.session.userId; // Assuming userId is stored in session
        const user = await Users.findById(userId).lean(); // Fetch user data

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.render('LT-Profile_edit', { user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.post('/LT-Profile_edit', async (req, res) => {
    try {
        const userId = req.session.userId;
        const { description } = req.body;

        // Update user's description in the database
        await Users.findByIdAndUpdate(userId, { description });

        // Handle file upload if profile photo is changed
        if (req.files && req.files.profilePhoto) {
            const profilePhoto = req.files.profilePhoto;
            const uploadPath = path.join(__dirname, 'images', profilePhoto.name);

            console.log(`Uploading file to: ${uploadPath}`);

            // Move the uploaded file to the designated path
            profilePhoto.mv(uploadPath, async (err) => {
                if (err) {
                    console.error('File upload error:', err);
                    return res.status(500).send('File upload failed');
                }

                // Update user's profile photo path in the database
                await Users.findByIdAndUpdate(userId, { profilePhoto: '/images/' + profilePhoto.name });

                console.log('File uploaded and user updated successfully');
                res.redirect('/LT-Profile'); 
            });
        } else {
            res.redirect('/LT-Profile'); // Redirect to profile page if no file upload
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).send('Server Error');
    }
});

/*-----------------------  LT Profile Search/View   --------------------------*/
// Fetches and renders user's profile based on their userId
app.get('/LT-Profile_view-only', async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }

        const user = await Users.findById(req.query.userId).lean();
        if (!user) {
            // Error Handling: redirects to same URL page w/ an error query from search.js 
            const currentUrl = req.headers.referer; // Use referer header to get the current URL
            const url = new URL(currentUrl, `http://${req.headers.host}`);
            url.searchParams.set('error', 'UserNotFound');
            return res.redirect(url.href); 
        }

        // Fetch and add lab property to reservations from each collection
        const andrewReservations = (await Andrew.find({ 'reservations.reservedby': user.fullName }).lean()).flatMap(doc => 
            doc.reservations.filter(res => res.reservedby === user.fullName).map(res => ({ ...res, lab: 'AG101', seat: doc.seat }))
        );

        const goksReservations = (await Goks.find({ 'reservations.reservedby': user.fullName }).lean()).flatMap(doc => 
            doc.reservations.filter(res => res.reservedby === user.fullName).map(res => ({ ...res, lab: 'GK101', seat: doc.seat }))
        );

        const velascoReservations = (await Velasco.find({ 'reservations.reservedby': user.fullName }).lean()).flatMap(doc => 
            doc.reservations.filter(res => res.reservedby === user.fullName).map(res => ({ ...res, lab: 'VL101', seat: doc.seat }))
        );

        // Combine all reservations
        const allReservations = [
            ...andrewReservations,
            ...goksReservations,
            ...velascoReservations,
        ];

        res.render('LT-Profile_view-only', { user, reservations: allReservations });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

// Searches a user by name. if found, redirect to user's profile page, otherwise, redirects to same page w/ error alert.
// Note: the 'name' URL is passed to /search sending a GET request ('search?name=Mari%20Santos'), and extracts the 'name' query parameter from the URL
app.get('/search2', async (req, res) => {
    const name = req.query.name.trim().toLowerCase();   // 'name' is trimmed and assigned to 'const name'

    try {
        // Fetch all users and search a match w/ user.fullName
        const allusers = await Users.find({}).lean();
        const user = allusers.find(user => user.fullName.toLowerCase() === name); 
        
        if (!user) {
            // Error Handling: redirects to same URL page w/ an error query from search.js 
            const currentUrl = req.headers.referer; // Use referer header to get the current URL
            const url = new URL(currentUrl, `http://${req.headers.host}`);
            url.searchParams.set('error', 'UserNotFound');
            return res.redirect(url.href); 
        }
        // Redirect to profile page with the found user's _id
        res.redirect(`/LT-Profile_view-only?userId=${user._id}`);
    } catch (error) {
        console.error('Error searching for user:', error);
        res.status(500).send('Internal server error');
    }
});

// Fetches all the users, except the current user in the session.
app.get('/users-for-search2', async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }
        const currentUserId = req.session.userId;
        const user = await Users.find({ _id: { $ne: currentUserId } }).lean();
        if (!user) {
            // Error Handling: redirects to same URL page w/ an error query from search.js 
            const currentUrl = req.headers.referer; // Use referer header to get the current URL
            const url = new URL(currentUrl, `http://${req.headers.host}`);
            url.searchParams.set('error', 'UserNotFound');
            return res.redirect(url.href);
        }

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

app.get('/LAndrew', async (req, res) => {
    try {
        const { date, time } = req.query;

        const andrews = await Andrew.aggregate([{ $match: { seat: { $in: ['A01', 'A02', 'A03', 'A04', 'A05'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const andrews2 = await Andrew.aggregate([{ $match: { seat: { $in: ['A06', 'A07', 'A08', 'A09', 'A10'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const andrews3 = await Andrew.aggregate([{ $match: { seat: { $in: ['A11', 'A12', 'A13', 'A14', 'A15'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const andrews4 = await Andrew.aggregate([{ $match: { seat: { $in: ['A16', 'A17', 'A18', 'A19', 'A20'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const andrews5 = await Andrew.aggregate([{ $match: { seat: { $in: ['A21', 'A22', 'A23', 'A24', 'A25'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const andrews6 = await Andrew.aggregate([{ $match: { seat: { $in: ['A26', 'A27', 'A28', 'A29', 'A30'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);
        // Render your Handlebars template with the data
        res.render('LT-Reservation_Andrew', { andrews, andrews2, andrews3, andrews4, andrews5, andrews6 });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});



app.get('/LGoks', async (req, res) => {
    try {
        const { date, time } = req.query;

        const goks = await Goks.aggregate([{ $match: { seat: { $in: ['GK01', 'GK02', 'GK03', 'GK04', 'GK05'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const goks2 = await Goks.aggregate([{ $match: { seat: { $in: ['GK06', 'GK07', 'GK08', 'GK09', 'GK10'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const goks3 = await Goks.aggregate([{ $match: { seat: { $in: ['GK11', 'GK12', 'GK13', 'GK14', 'GK15'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const goks4 = await Goks.aggregate([{ $match: { seat: { $in: ['GK16', 'GK17', 'GK18', 'GK19', 'GK20'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const goks5 = await Goks.aggregate([{ $match: { seat: { $in: ['GK21', 'GK22', 'GK23', 'GK24', 'GK25'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const goks6 = await Goks.aggregate([{ $match: { seat: { $in: ['GK26', 'GK27', 'GK28', 'GK29', 'GK30'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);
        // Render your Handlebars template with the data
        res.render('LT-Reservation_Goks', { goks , goks2, goks3, goks4, goks5, goks6 });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});


app.get('/LVelasco', async (req, res) => {
    try {
        const { date, time } = req.query;

        const velasco = await Velasco.aggregate([{ $match: { seat: { $in: ['VL01', 'VL02', 'VL03', 'VL04', 'VL05'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const velasco2 = await Velasco.aggregate([{ $match: { seat: { $in: ['VL06', 'VL07', 'VL08', 'VL09', 'VL10'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const velasco3 = await Velasco.aggregate([{ $match: { seat: { $in: ['VL11', 'VL12', 'VL13', 'VL14', 'VL15'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const velasco4 = await Velasco.aggregate([{ $match: { seat: { $in: ['VL16', 'VL17', 'VL18', 'VL19', 'VL20'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const velasco5 = await Velasco.aggregate([{ $match: { seat: { $in: ['VL21', 'VL22', 'VL23', 'VL24', 'VL25'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);

        const velasco6 = await Velasco.aggregate([{ $match: { seat: { $in: ['VL26', 'VL27', 'VL28', 'VL29', 'VL30'] } } }, { $project: { seat: 1, reservations: { $filter: { input: "$reservations", as: "reservation", cond: { $and: [{ $eq: ["$$reservation.dateofreservation", date] }, { $eq: ["$$reservation.timeofreservation", time] }] } } } } }, { $group: { _id: "$seat", reservations: { $push: "$reservations" } } }, { $sort: { _id: 1 } }]);
        // Render your Handlebars template with the data
        
        res.render('LT-Reservation_Velasco', { velasco , velasco2, velasco3, velasco4, velasco5, velasco6 });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});


// LT-Reservations

// CT Reservation Search// CT Reservation Search
app.get('/LT-Reservation_search-goks', function(req, res) {
    const data = req.session.searchResults;
    res.render('LT-Reservation_search-goks', { data });
});

app.get('/LT-Reservation_search-andrew', function(req, res) {
    const data = req.session.searchResults;
    if (!data) {
        return res.status(404).send('No search results found');
    }
    res.render('LT-Reservation_search-andrew', { data });
});

app.get('/LT-Reservation_search-velasco', function(req, res) {
    const data = req.session.searchResults;
    if (!data) {
        return res.status(404).send('No search results found');
    }
    res.render('LT-Reservation_search-velasco', { data });
});


app.post('/LgetSearch', async (req, res) => {
    try {
        const { dblab, dateofreservation, timeofreservation } = req.body;
        let data;


        switch (dblab) {
            case "Goks":
                    try {
                        // Build the match query dynamically
                        let matchQuery = {};
                        let allDates, allTimes;

                        if (dateofreservation && timeofreservation) {
                        // Both date and time are provided
                        matchQuery["reservations.dateofreservation"] = dateofreservation;
                        matchQuery["reservations.timeofreservation"] = timeofreservation;
                        } else if (dateofreservation) {
                        // Only date is provided
                        matchQuery["reservations.dateofreservation"] = dateofreservation;
                        matchQuery["reservations.timeofreservation"] = { $exists: true }; // Match all times on this date
                        } else if (timeofreservation) {
                        // Only time is provided
                        matchQuery["reservations.dateofreservation"] = { $exists: true }; // Match all dates for this time
                        matchQuery["reservations.timeofreservation"] = timeofreservation;
                        }

                        // Aggregation for Goks
                        const goksResults = await Goks.aggregate([
                        { $unwind: "$reservations" },
                        { $match: matchQuery },
                        { $group: {
                            _id: {
                                dateofreservation: "$reservations.dateofreservation",
                                timeofreservation: "$reservations.timeofreservation"
                            },
                            total: { $sum: 1 }
                            }
                        },
                        { $sort: { "_id.dateofreservation": 1, "_id.timeofreservation": 1 } }
                        ]);

                        // Map the results to include the available seats for each date-time combination
                        // If no results found, create default data
                        if (goksResults.length === 0) {
                            data = [{
                            date: dateofreservation || 'default date',
                            time: timeofreservation || 'default time',
                            availableSeats: 30
                            }];
                        } else {
                            // Map the results to include the available seats for each date-time combination
                            data = goksResults.map(result => ({
                            date: result._id.dateofreservation,
                            time: result._id.timeofreservation,
                            availableSeats: 30 - result.total
                            }));
                        }

                        // If no specific date or time is selected, add all possible options
                        if (!dateofreservation && !timeofreservation) {
                        allDates = generateDates(); // Returns dates from today up to 7 days
                        allTimes = generateTimes(); // Returns a list of all time slots

                        allDates.forEach(d => {
                            allTimes.forEach(t => {
                            if (!data.find(item => item.date === d && item.time === t)) {
                                data.push({
                                date: d,
                                time: t,
                                availableSeats: 30 // Assuming 30 seats are available if no reservations
                                });
                            }
                            });
                        });
                        } else if (!dateofreservation) {
                        // If no date is provided, add all times for the given time slots
                        allDates = generateDates(); // Returns dates from today up to 7 days

                        allDates.forEach(d => {
                            if (!data.find(item => item.date === d && item.time === timeofreservation)) {
                            data.push({
                                date: d,
                                time: timeofreservation,
                                availableSeats: 30 // Assuming 30 seats are available if no reservations
                            });
                            }
                        });
                        } else if (!timeofreservation) {
                        // If no time is provided, add all time slots for the given dates
                        allTimes = generateTimes(); // Returns a list of all time slots

                        allTimes.forEach(t => {
                            if (!data.find(item => item.date === dateofreservation && item.time === t)) {
                            data.push({
                                date: dateofreservation,
                                time: t,
                                availableSeats: 30 // Assuming 30 seats are available if no reservations
                            });
                            }
                        });
                        }

                        req.session.searchResults = data;
                        res.json({ data, redirectUrl: '/LT-Reservation_search-goks' });
                    } catch (error) {
                        console.error('Error:', error);
                        res.status(500).send('An error occurred');
                    }
                    break;

            

            case "Andrews":
                try {
                    // Build the match query dynamically
                    let matchQuery = {};
                    let allDates, allTimes;

                    if (dateofreservation && timeofreservation) {
                    // Both date and time are provided
                    matchQuery["reservations.dateofreservation"] = dateofreservation;
                    matchQuery["reservations.timeofreservation"] = timeofreservation;
                    } else if (dateofreservation) {
                    // Only date is provided
                    matchQuery["reservations.dateofreservation"] = dateofreservation;
                    matchQuery["reservations.timeofreservation"] = { $exists: true }; // Match all times on this date
                    } else if (timeofreservation) {
                    // Only time is provided
                    matchQuery["reservations.dateofreservation"] = { $exists: true }; // Match all dates for this time
                    matchQuery["reservations.timeofreservation"] = timeofreservation;
                    }

                    // Aggregation for Goks
                    const goksResults = await Andrew.aggregate([
                    { $unwind: "$reservations" },
                    { $match: matchQuery },
                    { $group: {
                        _id: {
                            dateofreservation: "$reservations.dateofreservation",
                            timeofreservation: "$reservations.timeofreservation"
                        },
                        total: { $sum: 1 }
                        }
                    },
                    { $sort: { "_id.dateofreservation": 1, "_id.timeofreservation": 1 } }
                    ]);

                    // Map the results to include the available seats for each date-time combination
                    // If no results found, create default data
                    if (goksResults.length === 0) {
                        data = [{
                        date: dateofreservation || 'default date',
                        time: timeofreservation || 'default time',
                        availableSeats: 30
                        }];
                    } else {
                        // Map the results to include the available seats for each date-time combination
                        data = goksResults.map(result => ({
                        date: result._id.dateofreservation,
                        time: result._id.timeofreservation,
                        availableSeats: 30 - result.total
                        }));
                    }

                    // If no specific date or time is selected, add all possible options
                    if (!dateofreservation && !timeofreservation) {
                    allDates = generateDates(); // Returns dates from today up to 7 days
                    allTimes = generateTimes(); // Returns a list of all time slots

                    allDates.forEach(d => {
                        allTimes.forEach(t => {
                        if (!data.find(item => item.date === d && item.time === t)) {
                            data.push({
                            date: d,
                            time: t,
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                            });
                        }
                        });
                    });
                    } else if (!dateofreservation) {
                    // If no date is provided, add all times for the given time slots
                    allDates = generateDates(); // Returns dates from today up to 7 days

                    allDates.forEach(d => {
                        if (!data.find(item => item.date === d && item.time === timeofreservation)) {
                        data.push({
                            date: d,
                            time: timeofreservation,
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                        });
                        }
                    });
                    } else if (!timeofreservation) {
                    // If no time is provided, add all time slots for the given dates
                    allTimes = generateTimes(); // Returns a list of all time slots

                    allTimes.forEach(t => {
                        if (!data.find(item => item.date === dateofreservation && item.time === t)) {
                        data.push({
                            date: dateofreservation,
                            time: t,
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                        });
                        }
                    });
                    }

                    req.session.searchResults = data;
                    res.json({ data, redirectUrl: '/LT-Reservation_search-andrew' });
                } catch (error) {
                    console.error('Error:', error);
                    res.status(500).send('An error occurred');
                }
                break;

            case "Velascos":
                try {
                    // Build the match query dynamically
                    let matchQuery = {};
                    let allDates, allTimes;

                    if (dateofreservation && timeofreservation) {
                    // Both date and time are provided
                    matchQuery["reservations.dateofreservation"] = dateofreservation;
                    matchQuery["reservations.timeofreservation"] = timeofreservation;
                    } else if (dateofreservation) {
                    // Only date is provided
                    matchQuery["reservations.dateofreservation"] = dateofreservation;
                    matchQuery["reservations.timeofreservation"] = { $exists: true }; // Match all times on this date
                    } else if (timeofreservation) {
                    // Only time is provided
                    matchQuery["reservations.dateofreservation"] = { $exists: true }; // Match all dates for this time
                    matchQuery["reservations.timeofreservation"] = timeofreservation;
                    }

                    // Aggregation for Goks
                    const goksResults = await Velasco.aggregate([
                    { $unwind: "$reservations" },
                    { $match: matchQuery },
                    { $group: {
                        _id: {
                            dateofreservation: "$reservations.dateofreservation",
                            timeofreservation: "$reservations.timeofreservation"
                        },
                        total: { $sum: 1 }
                        }
                    },
                    { $sort: { "_id.dateofreservation": 1, "_id.timeofreservation": 1 } }
                    ]);

                    // Map the results to include the available seats for each date-time combination
                    // If no results found, create default data
                    if (goksResults.length === 0) {
                        data = [{
                        date: dateofreservation || 'default date',
                        time: timeofreservation || 'default time',
                        availableSeats: 30
                        }];
                    } else {
                        // Map the results to include the available seats for each date-time combination
                        data = goksResults.map(result => ({
                        date: result._id.dateofreservation,
                        time: result._id.timeofreservation,
                        availableSeats: 30 - result.total
                        }));
                    }

                    // If no specific date or time is selected, add all possible options
                    if (!dateofreservation && !timeofreservation) {
                    allDates = generateDates(); // Returns dates from today up to 7 days
                    allTimes = generateTimes(); // Returns a list of all time slots

                    allDates.forEach(d => {
                        allTimes.forEach(t => {
                        if (!data.find(item => item.date === d && item.time === t)) {
                            data.push({
                            date: d,
                            time: t,
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                            });
                        }
                        });
                    });
                    } else if (!dateofreservation) {
                    // If no date is provided, add all times for the given time slots
                    allDates = generateDates(); // Returns dates from today up to 7 days

                    allDates.forEach(d => {
                        if (!data.find(item => item.date === d && item.time === timeofreservation)) {
                        data.push({
                            date: d,
                            time: timeofreservation,
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                        });
                        }
                    });
                    } else if (!timeofreservation) {
                    // If no time is provided, add all time slots for the given dates
                    allTimes = generateTimes(); // Returns a list of all time slots

                    allTimes.forEach(t => {
                        if (!data.find(item => item.date === dateofreservation && item.time === t)) {
                        data.push({
                            date: dateofreservation,
                            time: t,
                            availableSeats: 30 // Assuming 30 seats are available if no reservations
                        });
                        }
                    });
                    }

                    req.session.searchResults = data;
                    res.json({ data, redirectUrl: '/LT-Reservation_search-velasco' });
                } catch (error) {
                    console.error('Error:', error);
                    res.status(500).send('An error occurred');
                }
                break;

            default:
                res.status(400).send('Invalid lab specified');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});


function generateDates() {
    const dates = [];
    const today = new Date();
    for (let i = 0; i <= 7; i++) {
      let date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]); // Return date in YYYY-MM-DD format
    }
    return dates;
  }
  
  function generateTimes() {
    return [
      "7:30AM-8:00AM", "8:00AM-8:30AM", "8:30AM-9:00AM", "9:00AM-9:30AM",
      "9:30AM-10:00AM", "10:00AM-10:30AM", "10:30AM-11:00AM", "11:00AM-11:30AM",
      "11:30AM-12:00PM", "12:00PM-12:30PM"
    ];
  }


// POST route to receive reservation data
app.post('/LT-Reservation_reservation-details', async (req, res) => {
    try {
        reservationData = req.body;
        user = req.session.userId;

        res.status(200).send('Reservation data received');
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});


// GET route to render reservation details
app.get('/LT-Reservation_reservation-details', async (req, res) => {
    try {
        const userId = req.session.userId; // Assuming userId is stored in session

        // Fetch user data
        const user = await Users.findById(userId).lean(); // Assuming Users is your user model

        // Render the reservation details page with user and reservationData
        res.render('LT-Reservation_reservation-details', {user, reservationData});
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});



app.post('/LT-Reservation_success', (req, res) => {
    data = req.body;
    res.status(200).send('Reservation data received');
});

app.get('/LT-Reservation_success', function(req, res) {
    res.render('LT-Reservation_success', data);
});


app.get('/LaddReservation', function(req, res) {
    res.render('LT-Reservation_success',reservationData);
});

app.post('/LaddReservation', async (req, res) => {
    const data = req.body;

    if (!Array.isArray(data.seatNames)) {
        return res.status(400).send('seatNames should be an array');
    }

    try {
        const updatePromises = data.seatNames.map(seat => {
            const filter = { seat: seat };
            const update = {
                $push: {
                    reservations: {
                        name: data.reserverName,
                        reservedby: data.fullName,
                        anonymous: data.anonymous,
                        dateofrequest: data.dateofrequest,
                        timeofrequest: data.timeofrequest,
                        dateofreservation: data.dateofreservation,
                        timeofreservation: data.timeofreservation,
                        value: 1
                    }
                }
            };

            let updatePromise;
            if (data.dblab === "Andrew") {
                updatePromise = Andrew.findOneAndUpdate(filter, update, { new: true });
            } else if (data.dblab === "Goks") {
                updatePromise = Goks.findOneAndUpdate(filter, update, { new: true });
            } else if (data.dblab === "Velasco") {
                updatePromise = Velasco.findOneAndUpdate(filter, update, { new: true });
            } else {
                throw new Error(`Unsupported dblab value: ${data.dblab}`);
            }

            return updatePromise;
        });

        const updatedResults = await Promise.all(updatePromises);

        if (updatedResults.some(updatedResult => updatedResult !== null)) {
            reservationData = data;
            return res.status(200).send('Reservation data received and updated successfully');
        } else {
            return res.status(404).send('Seats not found or reservations not updated');
        }
    } catch (err) {
        console.error('Error in adding reservation:', err);
        return res.status(500).send('An error occurred while adding reservation');
    }
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
