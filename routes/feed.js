var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/feed', function(req, res) {

	res.render('feedlikefb');

});


module.exports = router;
