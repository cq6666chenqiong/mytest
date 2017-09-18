var user = require('../models/user.js');
var express = require('express');
var Promise = require('bluebird');
var mongoose = require('mongoose');
var session = require('client-sessions');
var phbRouter = express.Router();

phbRouter.get("/login",function(req,resp){
    console.log('asb');
    var u = new user();
    u.name = req.query.name;
    u.password = req.query.password;
    return new Promise(function(resolve, reject){
        u.save(function (err) {
            if (err)
                resp.send(err);
            else{
                resolve("success");
            }
        });
    }).then(function(result){
        req.session.user = u;
        var message = {};
        message.isLogin = 1;
        message.data = {code:1};
        resp.send(JSON.stringify(message));
    });
});

module.exports = phbRouter;