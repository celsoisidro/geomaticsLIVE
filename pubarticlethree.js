var express = require('express');
var router = express.Router();

router.get('/pubarticlethree', (req, res) => {
    res.render('pubarticlethree', { title: "geomaticslive" });
});

module.exports = router;