var express = require('express');
var router = express.Router();

router.get('/pubarticleten', (req, res) => {
    res.render('pubarticleten', { title: "geomaticslive" });
});

module.exports = router;