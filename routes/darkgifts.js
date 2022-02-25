var path = require('path');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.sendFile('darkgifts.html', { root: path.join(__dirname, '../views')});
});

module.exports = router;