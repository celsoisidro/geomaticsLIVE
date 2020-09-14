var express = require('express');
var router = express.Router();

router.get('/pubarticfour', (req, res) => {
    res.render('pubarticfour', { title: 'geomaticslive' });
});

module.exports = router;