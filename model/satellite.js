var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var satelliteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Satellite', satelliteSchema);