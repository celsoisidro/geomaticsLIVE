var express = require('express');
var router = express.Router();

router.get('/pubarticthree', (req, res) => {
    res.render('pubarticthree', { title: "geomaticslive" });
});

module.exports = router;