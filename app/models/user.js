var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs')

var UserSchema = new Schema({
  username: {type: String, lowercase:true, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, lowercase:true, required: true, unique: true}
})

UserSchema.pre('save', function(next){
  var thisUser = this;
  bcrypt.hash(thisUser.password, null, null, function(err, hash) {
    if(err){
      console.log('not goot password')
      return next(err);
    } else {
      thisUser.password = hash;
      next();
    }
  });
});


// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });


//to export to server file
module.exports = mongoose.model('User', UserSchema) 
//to name model, call by var name



// var blogSchema = new Schema({
//   title:  String,
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });