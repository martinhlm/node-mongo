var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Dishes = require('../models/dishes');

var dishRouter = express.Router();  // is like a mini-express application
dishRouter.use(bodyParser.json());


dishRouter.route('/')

.get(function(req, res, next) {
    Dishes.find({}, function (err, dish) {
        if (err) throw err;

        res.json(dish);
    });
})

.post(function(req, res, next) {
    Dishes.create(req.body, function (err, dish) {
        if (err) throw err;

        console.log('Dish created');
        var id = dish._id;
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end(`Added the dish wit id ${id}`);
    });
})

.delete(function(req, res, next) {
    Dishes.remove({}, function (err, resp) {
        if (err) throw err;

        res.json(resp);
    });
});


dishRouter.route('/:dishId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next) {
        res.end('Will send details of the dish: ' + req.params.dishId
        +' to you!');
})

.put(function(req, res, next) {
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name +
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next) {
        res.end('Deleting dish: ' + req.params.dishId);
});


module.exports = dishRouter;
