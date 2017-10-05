var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js')
var Star = require("../models/star.js");


router.get('/splash', function(req, res){
  res.render('users/splash')
});
router.get('/', function(req, res) {
  Star.find({})
  .exec(function(err, stars){
    if (err) { console.log(err); }
    res.render('users/index.hbs', {
    stars: stars })
  });
});
//Sign up
router.get('/signup', function(req, res){
  res.render('users/signup')
});

//Show only if Current User session
router.get('/:id', authHelpers.authorize, function(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user, stars) {
    if (err) console.log(err);
    res.render('users/show', { user:user , stars: stars} );
  });
})
// edit user profile
router.get('/:id/edit', function(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    res.render('users/edit', {
      user: user
    });
  });
});

// USER UPDATE ROUTE
router.put('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    password_digest: res.hashedPassword,
  }, { new: true })
  .exec(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    res.render('users/show.hbs', {
      user: user
    });
  });
});

//Registration and save info
router.post('/', authHelpers.createSecure, function(req, res){
  var user = new User({
    email: req.body.email,
    password_digest: res.hashedPassword,
  });

  user.save(function(err, user){
    if (err) console.log(err);
    console.log(user);
    // console.log(req.sessions.currentUser);
    res.redirect('/users');
  });
});

// USER DESTROY
router.delete('/:id', function(req, res){
  User.findByIdAndRemove(req.params.id)
    .exec(function(err, user) {
      if (err) console.log(err);
      console.log('User deleted!');
      res.redirect('/users/splash')
    });
});


module.exports = router;

