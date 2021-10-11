var express = require('express');
var router = express.Router();

router.get('/pubarticleeleven', (req, res) => {
    res.render('pubarticleeleven', { title: "geomaticslive" });
});

module.exports = router;