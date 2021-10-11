var express = require('express');
var router = express.Router();

router.get('/pubarticlefive', (req, res) => {
    res.render('pubarticlefive', { title: "geomaticslive" });
});

module.exports = router;