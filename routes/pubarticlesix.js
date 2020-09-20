var express = require('express');
var router = express.Router();

router.get('/pubarticlesix', (req, res) => {
    res.render('pubarticlesix', { title: "geomaticslive" });
});

module.exports = router;