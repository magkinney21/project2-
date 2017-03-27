var express = require('express');
var router = express.Router({mergeParams: true});

var User = require("../models/user");
var Star = require("../models/star");


router.get('/', function indexStar(req, res){
  User.findById(req.params.userId)
    .exec(function(err, user){
      if (err) { console.log(err); }
      res.render('stars/index.hbs', {
        user: user
      });
    });
});

// EDIT

router.get('/:id/edit', function editStar(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const star = user.star.id(req.params.id);


      res.render('stars/edit', {
        star: star,
        user: user
      });
    });
});

// UPDATE
router.put('/:id', function updateStar(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const star = user.star.id(req.params.id);
      star.name = req.body.name;
      star.img = req.body.img;
      star.description = req.body.description;
      star.bestViewed = req.body.bestViewed;
      user.save();

      res.render('stars/show', {
        star: star,
        user: user
      });
    });
});


// NEW

router.get('/new', function newStar(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err) }
      res.render('stars/new', {
        user: user
      });
    });
});

// CREATE

router.post('/', function createStar(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }

      const newStar = {
      name: req.body.name,
      img :req.body.img,
      description:req.body.description
      }

      user.star.push(newStar)

      user.save(function (err) {
        if (err) console.log(err);
        console.log('Star created')
      });

      res.redirect('/users')
    });
});

// DELETE

router.delete('/:id', function deleteStar(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }

      user.star.id(req.params.id).remove();

      user.save(function (err) {
        if (err) console.log(err);
        console.log('Star was removed')
      });

      res.render('stars/index', {
        user: user
      });
    });

  // User.findByIdAndUpdate(req.params.userId, {
  //     $pull: {
  //       projectIdeas: {_id: req.params.id}
  //     }
  //   })
  //   .exec(function(err, project_idea) {


  //     if (err) console.log(err);

  //     res.redirect('/users')
  //   });
});


// SHOW

router.get('/:id', function showStar(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const star = user.star.id(req.params.id);
      res.render('stars/show', {
      star: star,
        user: user
      });
    });
});

module.exports = router;
