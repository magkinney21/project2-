var express = require('express');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var hbs = require('hbs')
var mongoose = require('mongoose');
var $ = require('jquery');
// var db = require('./db');





var app = express();

// ADD THE NAME OF YOUR DATABASE
// mongoose.connect('mongodb://localhost/<YourDatabaseNameHere>');

mongoose.connect('mongodb://localhost/stars_db');
var db = mongoose.connection;

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public/css'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(methodOverride('_method'));

app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));



var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');
var starsController = require('./controllers/stars.js');

app.use('/users', usersController);
app.use('/sessions', sessionsController);
app.use('/users/:userId/stars', starsController);

db.once('open', function() {
  console.log("database has been connected!");
});


app.listen(4000);
