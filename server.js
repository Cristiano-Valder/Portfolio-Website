
/*

<!--
    server.js
    Cristiano Valder
    301289929
    1st October 2023
 -->


const express = require('express'); // Define 'express' first
const app = express(); // Create the 'app' instance

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


app.use(express.static('public'));

app.set('view engine', 'ejs');
app.listen(1004);

console.log("Server is running on port 1004");

module.exports = app;
*/


const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 1004;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));


// included route here
const routes = require('./app/routes/index.server.routes');

// Use the defined routes
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
