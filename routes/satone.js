var express = require('express');
var router = express.Router();

router.get('/satone', (req, res) => {
    res.render('satone', { title: "geomaticslive" });
});

module.exports = router;