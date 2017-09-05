
/**
 * Module dependencies.
 */

var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var pubRouter = require('./routes/pubRouter');

app.set('views', __dirname + '/public/view');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
// rewrite to load static resources
app.use(express.static(__dirname + '/public'));
// static views


app.use('/pub', pubRouter);


var myrouter = require('./routes/router');
app.use('/api', myrouter);


app.all('/*', function (req, res) {
    res.sendfile('index.html', {root: __dirname + '/public'});
});

module.exports = app;


