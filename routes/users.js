var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is called when /users url hit ');
});

/* GET users listing. */
router.get('/k', function(req, res, next) {
  res.send('this is called when /users/k called');
});

module.exports = router;
