var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });



router.get('/:id', function(req,response) {
 var token = req.params.id;
 
/*  //response.render('activateresponse',{'data':token});
//});




var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//router.post('/signup', urlencodedParser, function(req, response, next){
jsonObject = JSON.stringify({
"token":token
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
    path : '/oauth/v1/create/account-activation/token',
    method : 'GET',
    headers : postheaders
};
 

// do the POST call
var reqPost = http.request(optionspost, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);
 
    res.on('data', function(d) {
		response.render('loginwelcome');
    });
});
 
// write the json data
reqPost.write(jsonObject);
reqPost.end();
reqPost.on('error', function(e) {
    console.error(e);
 });
 */
 response.render('loginwelcome'); 
});

module.exports = router;