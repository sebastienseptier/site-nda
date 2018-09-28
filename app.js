const env = require('./env');

var createError = require('http-errors');
var express = require('express'); // Fast, unopinionated, minimalist web framework for node.
var path = require('path'); // NodeJS Package for file paths.
var favicon = require('serve-favicon');
var logger = require('morgan');
var router = express.Router(); // Creates a new router object.

const cors = require('cors'); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

const routes = require('./routes/route')(router); // Import Routes

const PORT = process.env.PORT || 8080; // Allows heroku to set port.

const config = require('./config/database'); // Mongoose Config.
var mongoose = require('mongoose'); // Node Tool for MongoDB.
mongoose.Promise = global.Promise;
mongoose.connect(config.uri)
  .then(() =>  console.log('connected to ' + config.db))
  .catch((err) => console.error(err));

var app = express(); // Initiate Express Application.

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/frontend/dist/reseau-nda')));
app.use('/', express.static(path.join(__dirname, '/frontend/dist/reseau-nda')));
app.use('/api', routes); // Use User routes in application.
/*
// Connect server to Angular project.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/dist'));
});
*/
// Start Server: Listen on port 8080.
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT + ' in ' + process.env.NODE_ENV + ' mode');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  //console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.sendStatus(err.status);
});

module.exports = app;

//___________________________________________


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
app.use(bodyParser.json()); // parse application/json.
app.use(express.static(__dirname + '/frontend/dist')); // Provide static directory for frontend.
app.use('/api', routes); // Use User routes in application.

// Connect server to Angular project.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/dist'));
});

// Start Server: Listen on port 8080.
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT + ' in ' + process.env.NODE_ENV + ' mode');
});*/