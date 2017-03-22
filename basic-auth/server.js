var express = require('express');
var morgan = require('morgan');

var hostname = 'localhost';
var port = 4000;

var app = express();

app.use(morgan('dev'));     // pre-formatted morgan log optinos

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
