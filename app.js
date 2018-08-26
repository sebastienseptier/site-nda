/**
 * Node modules import.
 */
const env = require('./env');
const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const app = express(); // Initiate Express Application.
const router = express.Router(); // Creates a new router object.
const mongoose = require('mongoose'); // Node Tool for MongoDB.
mongoose.Promise = global.Promise;
const config = require('./config/database'); // Mongoose Config.
const path = require('path'); // NodeJS Package for file paths.
const bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const cors = require('cors'); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const routes = require('./routes/route')(router); // Import Routes

const PORT = process.env.PORT || 8080; // Allows heroku to set port.

// Database Connection (commenté pour test)
/*mongoose.connect(config.uri, (err) => {
    // Check if database was able to connect
    if (err) {
      console.log('Could NOT connect to database: ', err); // Return error message.
    } else {
      console.log('Connected to ' + config.db); // Return success message.
    }
});*/

// Middleware
/*app.use(cors({ origin: 'http://localhost:4200' })); // Allows cross origin in development only.
app.use(bodyParser.json()); // parse application/json.*/
app.use(express.static(__dirname + '/frontend/dist')); // Provide static directory for frontend.
/*app.use('/', routes); // Use User routes in application.*/

// Connect server to Angular project.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/dist'));
});

// Start Server: Listen on port 8080.
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT + ' in ' + process.env.NODE_ENV + ' mode');
});