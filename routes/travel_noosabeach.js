var express = require('express');
var router = express.Router();

router.get('/travel_noosabeach', (req, res) => {
    res.render('travel_noosabeach', { title: "geomaticslive" });
});

module.exports = router;