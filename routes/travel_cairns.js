var express = require('express');
var router = express.Router();

router.get('/travel_cairns', (req, res) => {
    res.render('travel_cairns', { title: "geomaticslive" });
});

module.exports = router;