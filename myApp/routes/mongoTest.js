var user = require('../models/user.js');
var express = require('express');
var Promise = require('bluebird');
var session = require('../models/session.js');
var mongoose = require('mongoose');

var options = {
    db_user: "game",
    db_pwd: "12345678",
    db_host: "localhost",
    db_port: 27017,
    db_name: "bookstore"
};

 var dbURL = "mongodb://" + options.db_host + ":" + options.db_port + "/" + options.db_name;
 mongoose.connect(dbURL);

var list = [];
var user1 = new user();
var user2 = new user();
var user3 = new user();

user1.id = 1;
user1.name = 1;
user1.password = 1;


user2.id = 2;
user2.name = 2;
user2.password = 2;


user3.id = 3;
user3.name = 3;
user3.password = 3;

//list.push(user1);
user1.save(function(err){
    if(err){
        console.log('失败');
    }
    console.log('成功');
});

user2.save(function(err){
    if(err){
        console.log('失败');
    }
    console.log('成功');
});

user3.save(function(err){
    if(err){
        console.log('失败');
    }
    console.log('成功');
});

