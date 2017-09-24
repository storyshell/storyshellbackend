var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('please find the header');

});

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

 
console.info('Options prepared:');
console.info('Do the POST call');
 

module.exports = router;

