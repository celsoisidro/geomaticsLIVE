var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imagesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Image = mongoose.model('Image', imagesSchema);

module.exports = Image;