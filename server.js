// npm dependencies
var express = require('express');
var app = express();
var path = require('path');

// configure express middleware
app.set('port', 3000);
app.use('/modules', express.static(path.join(__dirname + '/node_modules')));
app.use(express.static(path.join(__dirname + '/public')));

// start server
var server = app.listen('3000', function() {
    var port = server.address().port;
    console.log('This project is ready to view at localhost:' + port);
});
