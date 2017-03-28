var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stars_db');
mongoose.promise = global.Promise;

var User = require('../models/user');
var Star = require('../models/star');

Star.remove({}, function(err) {
    console.log(err);
});

var aquarius = new Star({
    name: 'Aquarius',
    img:'http://www.crystalinks.com/aquariusrb.jpg',
    description: 'Latin for water carrier or cup carrier',
    best_viewed: 'October'
});

var aquila = new Star({
    name: 'Aquila',
    img:'http://www.universetoday.com/wp-content/uploads/2008/10/Aquila-Mythological.jpg',
    description: 'Latin for eagle ',
    best_viewed: 'late summer, September'
});

var aries = new Star({
    name: 'Aries',
    img:'https://s-media-cache-ak0.pinimg.com/originals/53/f5/54/53f554fd7fbbb2b6fffe252b20e019b2.jpg',
    description: 'Latin for ram ',
    best_viewed: 'December'
});

var canisMajor = new Star({
    name: 'Canis Major',
    img:'http://sirius-star.ro/wp-content/uploads/2015/12/Sirius-Dog-2.jpg',
    description: 'Latin for greater dog ',
    best_viewed: 'February'
});

var cassiopeia = new Star({
    name: 'Cassiopeia',
    img:'http://utahsadventurefamily.com/wp-content/uploads/2012/06/cassiopeameg.jpg',
    description: 'No Latin meaning, it’s the name of a queen in Greek mythology',
    best_viewed: 'November'
});

var cygnus = new Star({
    name: 'Cygnus',
    img:'http://www.redorbit.com/media/uploads/2004/10/10_c868689f8d4d16b3abd0be1cb57f7fa22.jpg',
    description: 'Latinized Greek for swan',
    best_viewed: 'September'
});
var gemini = new Star({
    name: 'Gemini',
    img:'http://www.crystalinks.com/geminirb.jpg',
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
    img:'http://scistand.com/wp-content/uploads/sites/3/2013/08/Lyra.png',
    description: 'Latin for lyre',
    best_viewed: 'August'
});
var orion = new Star({
    name: 'Orion',
    img:'https://bobmoler.files.wordpress.com/2015/01/orion-straddles-the-equator.png',
    description: 'Named for Orion, the mythological Greek hunter',
    best_viewed: 'January'
});
var pisces = new Star({
    name: 'Pisces',
    img:'http://www.crystalinks.com/piscesrb.jpg',
    description: 'Latin for fish',
    best_viewed: 'November'
});
var scorpius = new Star({
    name: 'Scorpius',
    img:'http://www.clarkfoundation.org/astro-utah/vondel/images/ScorpArt.gif',
    description: 'Latin for scorpion',
    best_viewed: 'July'
});
var taurus = new Star({
    name: 'Taurus',
    img:'http://www.birthnumbers.net/wp-content/uploads/2010/05/Taurus.jpg',
    description: 'Latin for bull',
    best_viewed: 'January'
});
var ursaMajor = new Star({
    name: 'Ursa Major',
    img:'https://s-media-cache-ak0.pinimg.com/originals/96/54/12/965412fe2671937bfa3e8e495f3d0b83.jpg',
    description: 'Latin for large bear',
    best_viewed: 'April'
});
var ursaMinor = new Star({
    name: 'Ursa Minor',
    img:'https://s3-us-west-2.amazonaws.com/cdn.cosmeticsanctuary.com/wp-content/uploads/2015/08/0f107360a00e92476faa6c2c12088e25.jpg',
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



