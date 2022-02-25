// Add this for HTML to work
var path = require('path'); 
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // Comment out the top line (by default express uses JADE)and insert the bottom so the HTML (under 'views' folder) can work
  res.sendFile('index.html', { root: path.join(__dirname, '../views')});
});

module.exports = router;
