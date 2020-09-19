var express = require('express');
var router = express.Router();

router.get('/pubarticletwo', (req, res) => {
    res.render('pubarticletwo', { title: "geomaticslive" });
});

module.exports = router;