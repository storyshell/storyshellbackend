var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express',Title: 'shashi' });
  

});

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/signup', urlencodedParser, function(req, response, next){
jsonObject = JSON.stringify({
"firstName":req.body.firstname,
"lastName":req.body.lastname,
"password":req.body.password,
"mobileNumber":req.body.mobno,
"email":req.body.email

});
 
// prepare the header
var postheaders = {
    'Content-Type' : 'application/json',
    'Content-Length' : Buffer.byteLength(jsonObject, 'utf8')
};
 
// the post options
var optionspost = {
    host : 'localhost',
    port : 8080,
    path : '/oauth/v1/create/user',
    method : 'POST',
    headers : postheaders
};
 
console.info('Options prepared:');
console.info(optionspost);
console.info('Do the POST call');
 
// do the POST call
var reqPost = http.request(optionspost, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);
 
    res.on('data', function(d) {
		response.render('welcome');
    });
});
 
// write the json data
reqPost.write(jsonObject);
reqPost.end();
reqPost.on('error', function(e) {
    console.error(e);
});
 	
});

/* GET StoryShell page */
router.get('/welcome', function(req,res,next) {
 res.render('welcome');
 });
 


 

module.exports = router;

