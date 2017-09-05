var user = require('../models/user.js');
var express = require('express');
var router = express.Router();

router.get("/user",function(req,resp){
    console.log("abcdef");
    //resp.send("this is my user");
    resp.render('index',{});
});

module.exports = router;