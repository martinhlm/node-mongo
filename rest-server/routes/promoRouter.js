var express = require('express');
var bodyParser = require('body-parser');

var promoRouter = express.Router();  // is like a mini-express application
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all(function(req, res, next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req, res, next) {
        res.end('Will send all the promo to you!');
})

.post(function(req, res, next) {
    res.end('Will add the promo: ' + req.body.name + ' with details: ' +
    req.body.description);
})

.delete(function(req, res, next) {
        res.end('Deleting all promo');
});


promoRouter.route('/:dishId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next) {
        res.end('Will send details of the promo: ' + req.params.dishId
        +' to you!');
})

.put(function(req, res, next) {
        res.write('Updating the promo: ' + req.params.dishId + '\n');
        res.end('Will update the promo: ' + req.body.name +
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next) {
        res.end('Deleting promo: ' + req.params.dishId);
});


module.exports = promoRouter;
