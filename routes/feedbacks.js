var express = require('express');
var feedbackController = require('../controllers/feedbacks');
var router = express.Router();

router
    .route('/feedbackform')
    .get(feedbackController.feedbackForm)
    .post(feedbackController.create)


module.exports = router;