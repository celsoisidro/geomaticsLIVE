var express = require('express');
var router = express.Router();

router.get('/satwiki', (req, res) => {
    res.render('satwiki', { title: "geomaticslive" });
});

module.exports = router;