var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedbacksSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

var Feedback = mongoose.model('Feedback', feedbacksSchema);

module.exports = Feedback;