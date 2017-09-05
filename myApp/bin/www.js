var app = require('../app');
var http = require('http');
var port =  3000;
app.set('port', port);

//Create HTTP server
var server = http.createServer(app);
//server.listen(port);
server.listen(3000, function(){
    console.log("Express server listening on port %d in %s mode", server.address().port,server.address());
});