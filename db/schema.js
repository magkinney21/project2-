

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var StarSchema = new Schema({
  name: String,
  image: String,
  best_viewed:String,
  description: String,
  created_at: Date,
  updated_at: Date
});

StarSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

var UserSchema = new Schema({
  name: String,
  email: String,
  password_digest: String,
  created_at: Date,
  updated_at: Date,
  star:[StarSchema]
});

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

var UserModel = mongoose.model('User', UserSchema);
var StarModel = mongoose.model('Star',StarSchema);

module.exports = {
  User: UserModel,
  Star: StarModel
}
