var express = require('express');
var router = express.Router();

router.get('/pubarticone', (req, res) => {
    res.render('pubarticone', { title: "geomaticslive" });
});

module.exports = router;