var express = require('express');
var router = express.Router();

router.get('/cityview', (req, res) => {
    res.render('cityview', { title: "geomaticslive" });
});

module.exports = router;