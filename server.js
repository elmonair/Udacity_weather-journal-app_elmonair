// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
// Setup Server // NOTE// Can use $env:port=5000 to change port code to which desired but defaut will 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Our server running on localhost port ${port}`);
});
