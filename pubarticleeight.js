var express = require('express');
var router = express.Router();

router.get('/pubarticleeight', (req, res) => {
    res.render('pubarticleeight', { title: "geomaticslive" });
});

module.exports = router;