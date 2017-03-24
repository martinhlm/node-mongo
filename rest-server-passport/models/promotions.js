var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promotionsSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        label: {
            type: String,
            default: ''
        },
        price: {
            type: Currency
        },
        description: {
            type: String
        }
});

var Promotions = mongoose.model('Promotions', promotionsSchema);

module.exports = Promotions;
