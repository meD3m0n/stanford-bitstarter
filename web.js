var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var string = fs.readFileSync('index.html', 'utf-8');
var buffer = new Buffer(string);

var data = buffer.toString("utf-8");
app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
