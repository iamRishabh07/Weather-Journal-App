// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 8000;

const server = app.listen(port, listening);

function listening() {
    console.log(`server running on port: ${port}`)
}



// Callback function to complete GET '/all'
app.get('/all', function sendData(req, res) {
    res.send(projectData);
});

app.post('/addData', function getData(req, res) {
    newEntry = {
        temperature: req.body.temperature,
        date: req.body.date,
        feelings: req.body.feelings,
    };

    projectData.push(newEntry);
    console.log(projectData);
    // set HTTP status of response to 204 ("Created")
    res.status(204).end();
});