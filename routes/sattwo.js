var express = require('express');
var router = express.Router();

router.get('/sattwo', (req, res) => {
    res.render('sattwo', { title: "geomaticslive" });
});

module.exports = router;