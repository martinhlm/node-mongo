var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Promo = require('../models/promotions');

var promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')

.get(function(req, res, next) {
    Promo.find({}, function (err, promo) {
        if (err) throw err;

        res.json(promo);
    });
})

.post(function(req, res, next) {
    Promo.create(req.body, function (err, promo) {
        if (err) throw err;

        console.log('Promo created');
        var id = dish._id;
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end(`Added the promotion wit id ${id}`);
    });
})

.delete(function(req, res, next) {
    Promo.remove({}, function (err, resp) {
        if (err) throw err;

        res.json(resp);
    });
});


promoRouter.route('/:promoId')

.get(function(req, res, next) {
    Promo.findById(req.params.promoId, function (err, promo) {
        if (err) throw err;

        res.json(promo);
    });
})

.put(function(req, res, next) {
    Promo.findByIdAndUpdate(req.params.promoId, {
        $set: req.body
    }, {
        new: true
    }, function (err, promo) {
        if(err) throw err;

        res.json(promo);
    });
})

.delete(function(req, res, next) {
    Promo.findByIdAndRemove(req.params.promoId, function (err, resp) {
        if (err) throw err;

        res.json(resp);
    });
});


module.exports = promoRouter;
