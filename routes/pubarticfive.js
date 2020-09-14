var express = require('express');
var router = express.Router();

router.get('/pubarticfive', (req, res) => {
    res.render('pubarticfive', { title: 'geomaticslive' });
});

module.exports = router;