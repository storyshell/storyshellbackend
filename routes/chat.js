var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/chatbox', function(req, res) {

	res.render('chatbox');

});


module.exports = router;
