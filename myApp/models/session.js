var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sessionSchema = new Schema({
    userId:String,
    sessionId:String
});

module.exports = mongoose.model('session', sessionSchema);