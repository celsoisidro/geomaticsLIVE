var express = require('express');
var router = express.Router();

router.get('/pubarticlefour', (req, res) => {
    res.render('pubarticlefour', { title: "geomaticslive" });
});

module.exports = router;