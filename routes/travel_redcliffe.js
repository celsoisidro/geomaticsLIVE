var express = require('express');
var router = express.Router();

router.get('/travel_redcliffe', (req, res) => {
    res.render('travel_redcliffe', { title: "geomaticslive" });
});

module.exports = router;