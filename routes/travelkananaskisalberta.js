var express = require('express');
var router = express.Router();

router.get('/travelkananaskisalberta', (req, res) => {
    res.render('travelkananaskisalberta', { title: "geomaticslive" });
});

module.exports = router;