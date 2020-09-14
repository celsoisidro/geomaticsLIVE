var express = require('express');
var router = express.Router();

router.get('/pubartic', (req, res) => {
    res.render('pubartic', { title: 'geomaticslive' });
});

module.exports = router;