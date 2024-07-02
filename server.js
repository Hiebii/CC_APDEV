var express = require('express');
const app = express();
const port = 3000; 

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

// Serve the index.html file at the root route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/CT-homepage.html');
});

// Serve the CT-homepage.html file
app.get('/CT-homepage', function(req, res) {
    res.sendFile(__dirname + '/CT-homepage.html');
});

app.get('/CT-Reservation_Goks', function(req, res) {
    res.sendFile(__dirname + '/CT-Reservation_Goks.html');
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
