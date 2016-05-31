var express = require('express');

var app = express();
app.use(express.compress());
app.use('/static', express.static(__dirname + '/static'));
app.use('/games', express.static(__dirname + '/games'));
/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/


app.get('/', function(req, res) {
    res.sendfile('views/index.html');
});

app.get('/gamelog', function(req, res) {
    res.sendfile('views/gamelog.html');
});
var port = process.env.PORT || 3000
app.listen(port);
console.log('Server started at port ' + port);
