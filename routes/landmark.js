var express = require('express');
var Image = require('../models/images')
var router = express.Router();

router.get('/landmark', function(req, res, next) {
    Image.find(function(err, images) {
        if (err) console.log(err)

        res.render('landmark', { title: 'Images', images: images });
    });
});

module.exports = router;