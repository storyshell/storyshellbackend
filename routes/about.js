var http = require('http');
var express = require('express');
var router = express.Router();

router.get('/about', function(req,res) {
	console.log('Accessing this section.');
	res.render('about', { title: 'about' });

});

module.exports = router;