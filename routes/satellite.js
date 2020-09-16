var express = require('express');
var router = express.Router();

router.get('/satellite', (req, res) => {
    res.render('satellite', { title: "geomaticslive" });
});

module.exports = router;