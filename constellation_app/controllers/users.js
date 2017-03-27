var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js')
var Star = require("../models/star.js");

// router.get('/signup', function(req, res){
// });

// router.post('/', authHelpers.createSecure, function(req, res){
// });

// module.exports = router;


// router.get('/', function(req, res) {
//   console.log(req.session)
//   User.find({})
//   .exec(function(err, users){
//     if (err) { console.log(err); }
//     res.render('users/index.hbs', {
//       users: users,
//       currentUser: req.session.currentUser
//     })
//   });
// })
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

//Registration and save info
router.post('/', authHelpers.createSecure, function(req, res){
  var user = new User({
    email: req.body.email,
    password_digest: res.hashedPassword,
    // username: req.body.username
  });

  user.save(function(err, user){
    if (err) console.log(err);
    console.log(user);
    // console.log(req.sessions.currentUser);
    res.redirect('/sessions/login');
  });
});

module.exports = router;

