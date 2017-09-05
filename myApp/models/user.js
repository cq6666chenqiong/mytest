var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define an db object
var userSchema = new Schema({
    id:String,
    name: String,
    age: String,
    job: String,
    genre: String,
    password: String
});

// bind module for accessing outside
module.exports = mongoose.model('user', userSchema);