var express = require('express');
var router = express.Router();

router.get('/traveltrail_dummy', (req, res) => {
    res.render('traveltrail_dummy', { title: "geomaticslive" });
});

module.exports = router;