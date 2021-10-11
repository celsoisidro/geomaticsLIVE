var express = require('express');
var router = express.Router();

router.get('/travelcarselandalberta', (req, res) => {
    res.render('travelcarselandalberta', { title: "geomaticslive" });
});

module.exports = router;