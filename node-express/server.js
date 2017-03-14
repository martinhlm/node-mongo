var express = require('express');
var morgan = require('morgan');

var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');

var hostname = 'localhost';
var port = 4000;

var app = express();

app.use(morgan('dev'));
app.use('/dishes', dishRouter.createDish());
app.use('/promotions', promoRouter.createPromo());
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});
