var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/feedprofile', function(req, res) {

	res.render('feedprofile');

});


module.exports = router;
