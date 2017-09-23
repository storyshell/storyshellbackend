var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/forgetpass', function(req, res) {

	res.render('forgetpass');

});

router.post('/xyz', function(req, res) {
	var email=req.query.email;
	console.log(email);
	res.render('welcome');
  //res.send('welcome to abc');
});

module.exports = router;

