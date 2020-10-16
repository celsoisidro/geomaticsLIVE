var express = require('express');
var router = express.Router();

router.get('/pubarticleseven', (req, res) => {
    res.render('pubarticleseven', { title: "geomaticslive" });
});

module.exports = router;