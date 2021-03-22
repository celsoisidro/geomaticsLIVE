var express = require('express');
var router = express.Router();

router.get('/pubarticlenine', (req, res) => {
    res.render('pubarticlenine', { title: "geomaticslive" });
});

module.exports = router;