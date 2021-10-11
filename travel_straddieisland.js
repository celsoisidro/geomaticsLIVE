var express = require('express');
var router = express.Router();

router.get('/travel_straddieisland', (req, res) => {
    res.render('travel_straddieisland', { title: "geomaticslive" });
});

module.exports = router;