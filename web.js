var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = new Buffer(15);
var string = fs.readFileSync('index.html', 'utf-8');

buffer.write(string);
var data = buffer.toString("utf-8", 0, 15);
app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
