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
        stars: user.star
      });
    });
});
// CREATE

router.post('/', function createStar(req, res){
  console.log("hello")
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
     const newStar = new Star ({
      name: req.body.name,
      img :req.body.img,
      description:req.body.description
      });
      user.star.push(newStar);

      user.save();

      res.redirect(`/users/${req.params.userId}/stars`)
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
    Star.findByIdAndUpdate(req.params.id)
    .exec(function (err, star){
      if (err) { console.log(err); }
      // const star = user.star.id(req.params.id);
      star.name = req.body.name;
      star.img = req.body.img;
      star.description = req.body.description;
      star.bestViewed = req.body.bestViewed;
      star.save();

      res.render(`/users/${req.params.userId}/stars`, {
      });
    });
});
// update
// router.patch('/:id', function(req, res) {
//     Star.findByIdAndUpdate(req.params.id, {
//       name:req.body.name,
//       img:req.body.img
//       description:req.body.description
//       bestViewed:req.body.bestViewed
//     }, { new: true })
//         .exec(function(err, star) {
//             if (err) { console.log(err); }

//             console.log(star);
//             // res.send(author);
//             res.render('star/show', {
//                 author: author
//             });
//         });
// });

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



// DELETE

router.delete('/:id', function deleteStar(req, res) {
  Star.findByIdAndRemove(req.params.id)
    .exec(function (err, star){
      if (err) { console.log(err); }

        console.log('Constellation was removed')
      });
User.findByIdAndUpdate(req.params.userId, {
  $pull: {
    star: {_id: req.params.id}
  }
})
.exec(function(err, user){
  if(err) {console.log(err);}
        res.render('/stars', {
        user: user
    });
  })
});


// SHOW

router.get('/:id', function showStar(req, res) {
  console.log(req.params.id)
  Star.findById(req.params.id)
    .exec(function (err, star){
      if (err) { console.log(err); }
      console.log(star)
      res.render('stars/show', {
        star: star
        // user: user
      });
    });
});

module.exports = router;
