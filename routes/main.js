var express = require('express');
var router = express.Router();

router.get('/main', (req, res) => {
    res.render('main', { title: "geomaticslive" });
});

module.exports = router;