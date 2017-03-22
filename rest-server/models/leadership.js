var mongoose = require('mongoose')
var Schema = mongoose.Schema

var leadersSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        designation: {
            type: String,
        },
        abbr: {
            type: String
        },
        description: {
            type: String
        }
})

var Leaders = mongoose.model('Leadership', leadersSchema)

module.exports = Leaders
