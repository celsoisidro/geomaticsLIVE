"use strict";

var express = require('express');

var router = express.Router();
router.get('/worldview', function (req, res) {
  res.render('worldview', {
    title: "geomaticslive"
  });
});
module.exports = router;