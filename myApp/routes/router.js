var user = require('../models/user.js');
var express = require('express');
var Promise = require('bluebird');
var session = require('client-sessions');
var mongoose = require('mongoose');
var router = express.Router();

router.use(function(req,resp,next){
    console.log("bas==="+__dirname);
    next();
});

router.get("/user",function(req,resp){
    console.log("user log");

    resp.send('index',{});
});

router.get("/user/list",function(req,resp){
    console.log("user log");
    var user1 = {};
    user1.id = 1;
    user1.name = 1;
    user1.job = 1;
    user1.age = 1;
    user1.genre = 1;
    user1.password = 1;
    var user2 = {};
    user2.id = 2;
    user2.name = 2;
    user2.job = 2;
    user2.age = 2;
    user2.genre = 2;
    user2.password = 2;
    var p = [];
    p.push(user1);
    p.push(user2);
    resp.send(JSON.stringify(p));
});

module.exports = router;