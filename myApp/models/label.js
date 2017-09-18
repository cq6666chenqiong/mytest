var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var labelSchema = new Schema({
    userId:String,
    label:String
});

module.exports = mongoose.model('label', labelSchema);