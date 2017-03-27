var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stars_db');
mongoose.promise = global.Promise;

var User = require('../models/user');
var Star = require('../models/star');

Star.remove({}, function(err) {
    console.log(err);
});

User.remove({}, function(err) {
    console.log(err);
});

// make new user maggie with all the right fields
// var maggie = new User

// save user maggie
// maggie.save(function(err) {
//   if (err) console.log(err);

var aquarius = new Star({
    name: 'Aquarius',
    img:'https://upload.wikimedia.org/wikipedia/commons/b/bf/Aquarius.gif',
    description: 'Latin for water carrier or cup carrier',
    best_viewed: 'October'
});

var aquila = new Star({
    name: 'Aquila',
    img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Aquila.gif',
    description: 'Latin for eagle ',
    best_viewed: 'late summer, September'
});

var aries = new Star({
    name: 'Aries',
    img:'https://media.giphy.com/media/lfpwr7E2wotFu/giphy.gif',
    description: 'Latin for ram ',
    best_viewed: 'December'
});

var canisMajor = new Star({
    name: 'Canis Major',
    img:'https://upload.wikimedia.org/wikipedia/commons/5/56/Canis_Major_%26_Minor_%26_Lepus.gif',
    description: 'Latin for greater dog ',
    best_viewed: 'February'
});



aquarius.save(function(err) {
  if (err) console.log(err);

  console.log('Aquarius created!');
});

aquila.save(function(err) {
  if (err) console.log(err);

  console.log('Aquila created!');
});

aries.save(function(err) {
  if (err) console.log(err);

  console.log('Aries created!');
});

canisMajor.save(function(err) {
  if (err) console.log(err);

  console.log('Canis Major created!');
});

// push all stars into maggie.star
// users.star.forEach(function(user, i){
//   maggie.star.push(star[i]);



