var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stars_db');
mongoose.promise = global.Promise;

var User = require('../models/user');
var Star = require('../models/star');

Star.remove({}, function(err) {
    console.log(err);
});

// User.remove({}, function(err) {
//     console.log(err);
// });

// make new user maggie with all the right fields
// var maggie = new User

// save user maggie
// maggie.save(function(err) {
//   if (err) console.log(err);

var aquarius = new Star({
    name: 'Aquarius',
    img:'http://www.crystalinks.com/aquariusrb.jpg',
    description: 'Latin for water carrier or cup carrier',
    best_viewed: 'October'
});

var aquila = new Star({
    name: 'Aquila',
    img:'http://content.artofmanliness.com/uploads/2014/07/oldaquila.jpg',
    description: 'Latin for eagle ',
    best_viewed: 'late summer, September'
});

var aries = new Star({
    name: 'Aries',
    img:'http://content.artofmanliness.com/uploads/2014/07/oldaries.jpgf',
    description: 'Latin for ram ',
    best_viewed: 'December'
});

var canisMajor = new Star({
    name: 'Canis Major',
    img:'http://content.artofmanliness.com/uploads/2014/07/oldcanis.jpg',
    description: 'Latin for greater dog ',
    best_viewed: 'February'
});

var cassiopeia = new Star({
    name: 'Cassiopeia',
    img:'http://content.artofmanliness.com/uploads/2014/07/oldcassio.jpg',
    description: 'No Latin meaning, it’s the name of a queen in Greek mythology',
    best_viewed: 'November'
});

var cygnus = new Star({
    name: 'Cygnus',
    img:'http://content.artofmanliness.com/uploads/2014/07/oldcygnus.jpg',
    description: 'Latinized Greek for swan',
    best_viewed: 'September'
});
var gemini = new Star({
    name: 'Gemini',
    img:'http://content.artofmanliness.com/uploads/2014/07/oldgemini.jpg',
    description: 'Latin for twins',
    best_viewed: 'February'
});
var leo = new Star({
    name: 'Leo',
    img:'http://www.crystalinks.com/leorb.jpg',
    description: 'Latin for lion',
    best_viewed: 'April'
});
var lyra = new Star({
    name: 'Lyra',
    img:'http://content.artofmanliness.com/uploads/2014/07/oldcygnus.jpg',
    description: 'Latin for lyre',
    best_viewed: 'August'
});
var orion = new Star({
    name: 'Orion',
    img:'http://content.artofmanliness.com/uploads/2014/07/oldorion.jpg',
    description: 'Named for Orion, the mythological Greek hunter',
    best_viewed: 'January'
});
var pisces = new Star({
    name: 'Pisces',
    img:'http://content.artofmanliness.com/uploads/2014/07/oldpisces.jpg',
    description: 'Latin for fish',
    best_viewed: 'November'
});
var scorpius = new Star({
    name: 'Scorpius',
    img:'http://content.artofmanliness.com/uploads/2014/07/oldscorpio.jpg',
    description: 'Latin for scorpion',
    best_viewed: 'July'
});
var taurus = new Star({
    name: 'Taurus',
    img:'http://content.artofmanliness.com/uploads/2014/07/oldtaurus.jpg',
    description: 'Latin for bull',
    best_viewed: 'January'
});
var ursaMajor = new Star({
    name: 'Ursa Major',
    img:'http://content.artofmanliness.com/uploads/2014/07/oldursamajor.jpg',
    description: 'Latin for large bear',
    best_viewed: 'April'
});
var ursaMinor = new Star({
    name: 'Ursa Minor',
    img:'http://content.artofmanliness.com/uploads/2014/07/oldursaminor.jpg',
    description: 'Latin for smaller bear',
    best_viewed: 'June'
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

cassiopeia.save(function(err) {
  if (err) console.log(err);

  console.log('cassiopeia created!');
});

cygnus.save(function(err) {
  if (err) console.log(err);

  console.log('cygnus created!');
});

gemini.save(function(err) {
  if (err) console.log(err);

  console.log('gemini created!');
});

leo.save(function(err) {
  if (err) console.log(err);

  console.log('leo created!');
});

lyra.save(function(err) {
  if (err) console.log(err);

  console.log('lyra created!');
});

orion.save(function(err) {
  if (err) console.log(err);

  console.log('orion created!');
});
pisces.save(function(err) {
  if (err) console.log(err);

  console.log('pisces created!');
});
scorpius.save(function(err) {
  if (err) console.log(err);

  console.log('scorpius created!');
});
taurus.save(function(err) {
  if (err) console.log(err);

  console.log('taurus created!');
});
ursaMajor.save(function(err) {
  if (err) console.log(err);

  console.log('Ursa Major created!');
});
ursaMinor.save(function(err) {
  if (err) console.log(err);

  console.log('Ursa Minor created!');
});
// push all stars into maggie.star
// users.star.forEach(function(user, i){
//   maggie.star.push(star[i]);



