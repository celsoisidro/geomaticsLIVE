"use strict";

var express = require('express');

var router = express.Router();
router.get('/renderedmaps', function (req, res) {
  res.render('renderedmaps', {
    title: "geomaticslive"
  });
});
module.exports = router;