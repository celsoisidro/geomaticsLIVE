var express = require('express');
var router = express.Router();

router.get('/pubartictwo', (req, res) => {
    res.render('pubartictwo', { title: 'geomaticslive' });
});

module.exports = router;