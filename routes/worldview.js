var express = require('express');
var router = express.Router();

router.get('/worldview', (req, res) => {
    res.render('worldview', { title: "geomaticslive" });
});

module.exports = router;