var express = require('express');
var Image = require('../models/images')
var router = express.Router();

router.get('/traveltrail', function(req, res, next) {
    Image.find(function(err, images) {
        if (err) console.log(err)

        res.render('traveltrail', { title: 'Images', images: images });
    });
});

module.exports = router;