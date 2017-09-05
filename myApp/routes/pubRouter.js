var user = require('../models/user.js');
var express = require('express');
var phbRouter = express.Router();

phbRouter.get("/login",function(req,resp){
    console.log(req.query.name);
    console.log(req.query.password);
    //resp.send("this is my user");
    var message = {};
    message.text = "登陆验证";
    resp.render(JSON.stringify(message));
});

module.exports = phbRouter;