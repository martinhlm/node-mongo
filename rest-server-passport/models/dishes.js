var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// create a schema
var dishSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        image: {
            type: String,
        },
        category: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            default: ''
        },
        price: {
            type: Currency
        },
        description: {
            type: String,
            required: true
        },
        comments: [{
            rating: {
                type: Number
            },
            comment: {
                type: String
            },
            author: {
                type: String
            }
        }]
    }, {
        timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Dishes = mongoose.model('Dish', dishSchema);

// make this available to our Node applications
module.exports = Dishes;
