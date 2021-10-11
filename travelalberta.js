var express = require('express');
var router = express.Router();

router.get('/travelalberta', (req, res) => {
    res.render('travelalberta', { title: "geomaticslive" });
});

module.exports = router;