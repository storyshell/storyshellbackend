var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/profile', function(req, res, next) {
console.log('profile page opens');
	res.render('profile',{title :'profile'});

});


module.exports = router;