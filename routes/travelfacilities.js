var express = require('express');
var router = express.Router();

router.get('/travelfacilities', (req, res) => {
    res.render('travelfacilities', { title: "geomaticslive" });
});

module.exports = router;