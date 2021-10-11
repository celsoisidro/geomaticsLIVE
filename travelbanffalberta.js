var express = require('express');
var router = express.Router();

router.get('/travelbanffalberta', (req, res) => {
    res.render('travelbanffalberta', { title: "geomaticslive" });
});

module.exports = router;