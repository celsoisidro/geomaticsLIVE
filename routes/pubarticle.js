var express = require('express');
var router = express.Router();

router.get('/pubarticle', (req, res) => {
    res.render('pubarticle', { title: "geomaticslive" });
});

module.exports = router;