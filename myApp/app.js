
/**
 * Module dependencies.
 */

var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var pubRouter = require('./routes/pubRouter');
var myrouter = require('./routes/router');
var session = require('client-sessions');

app.set('views', __dirname + '/public/view');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
// rewrite to load static resources
app.use(express.static(__dirname + '/public'));
// static views

app.use(session({
    cookieName: 'session',
    secret: 'random_string_goes_here',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));

var options = {
    db_user: "game",
    db_pwd: "12345678",
    db_host: "localhost",
    db_port: 27017,
    db_name: "bookstore"
};

//var dbURL = "mongodb://" + options.db_user + ":" + options.db_pwd + "@" + options.db_host + ":" + options.db_port + "/" + options.db_name;


var dbURL = "mongodb://" + options.db_host + ":" + options.db_port + "/" + options.db_name;
mongoose.connect(dbURL);

app.use('/pub', pubRouter);



app.use(function(req, resp, next) {
    console.log('use go');
    console.log(req.session.user);
    if (req.session && req.session.user) {
        next();
        /*
        User.findOne({ email: req.session.user.email }, function(err, user) {
            if (user) {
                req.user = user;
                delete req.user.password; // delete the password from the session
                req.session.user = user; //refresh the session value
                res.locals.user = user;
            }
            // finishing processing the middleware and run the route
            next();
        });
        */
    } else {
        console.log('use back');
        var message = {};
        message.isLogin = 0;
        message.data = {code:0};
        resp.send(JSON.stringify(message));
    }
});


app.use('/api', myrouter);


app.all('/*', function (req, res) {
    res.sendfile('index.html', {root: __dirname + '/public'});
});

module.exports = app;


