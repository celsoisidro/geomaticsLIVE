var express = require('express');
var Feedback = require('../models/feedbacks');

exports.feedbackForm = function(req, res) {
    res.render('feedbacks/new');
};

exports.create = function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var feedback = req.body.feedback;

    var newFeedback = new Feedback({
        name: name,
        email: email,
        feedback: feedback,
    });

    newFeedback.save(function(err) {
        if (err) throw err;

        console.log('Feedback successfully sent! Please wait for 1-2 days before we can respond to your feedback, thank you!.');
    });

    res.redirect('/');
};