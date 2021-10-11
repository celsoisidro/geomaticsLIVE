var express = require('express');
var router = express.Router();

router.get('/pubarticleone', (req, res) => {
    res.render('pubarticleone', { title: "geomaticslive" });
});

module.exports = router;