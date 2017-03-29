var express = require('express');
var router = express.Router({mergeParams: true});

var User = require("../models/user");
var Star = require("../models/star");


router.get('/', function indexStar(req, res){
  User.findById(req.params.userId)
  // Star.find({})
    .exec(function(err, user){
      if (err) { console.log(err); }
      // res.send('add a new star');
      console.log(user)
      res.render('stars/index.hbs', {
        user: user,
        user_email: user.email,
        // stars: user.star
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
      const newStar = new Star ({
        name: req.body.name,
        image :req.body.image,
        description:req.body.description,
        best_viewed:req.body.best_viewed
      });
      user.star.push(newStar);

      user.save();

      res.redirect(`/users/${req.params.userId}/stars`)
    });
});

// SHOW
router.get('/:starId', function showStar(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user) {
      if (err) { return console.log(err) }

      var foundStar = user.star.id(req.params.starId);
      // var foundStar = user.star.find(function (star) { return star.id === req.params.starId })
      console.log(foundStar)
      res.render('stars/show', {
        star: foundStar,
        user: user
      })
    })
});

// EDIT

router.get('/:starId/edit', function editStar(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }

      var editStar = user.star.find(function (star) { return star.id === req.params.starId })
      res.render('stars/edit', {
          star: editStar ,
          user: user
      })
    })
});

// UPDATE
router.put('/:starId', function updateStar(req, res){
    User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const star = user.star.id(req.params.starId);
      star.name = req.body.name;
      star.image = req.body.image;
      star.description = req.body.description;
      star.best_viewed = req.body.best_viewed;
      user.save();

      res.render('stars/show', {
        star: star,
        user: user
      })
      // res.redirect(`/users/${req.params.userId}/stars`);
      });
    });






// DELETE

router.delete('/:starId', function deleteStar(req, res) {
  Star.findByIdAndRemove(req.params.id)
    .exec(function (err, star){
      if (err) { console.log(err); }

      console.log('Constellation was removed')
    });

  User
    .findByIdAndUpdate(req.params.userId, {
      $pull: {
        star: {_id: req.params.starId}
      }
    })
    .exec(function(err, user){
      if(err) {console.log(err);}
      res.redirect(`/users/${req.params.userId}/stars`)
    })
});




// router.get('/:starId', function showStar(req, res) {
//   User.findById(req.params.userId)
//     .exec(function (err, user) {
//       if (err) { return console.log(err) }

//       var foundStar = user.star.find(function (star) { return star.id === req.params.starId })
//       console.log(foundStar)
//       res.render('stars/show', {
//           star: foundStar
//       })
//     })
// });

module.exports = router;
