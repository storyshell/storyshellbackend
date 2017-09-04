var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express',Title: 'shashi' });

});
/* GET Profile page */
router.get('/profile', function(req,res, next) {
  res.render('profile', { title: 'Profile' });
});
/* GET StoryShell page */
router.get('/storyshell', function(req,res,next) {
 res.render('storyshell', { title: 'storyshell' });
 });

/* GET confession page */
router.get('/confession', function(req,res,next) {
 res.render('confession', { title: 'confession' });
 });

/* GET feed pages */
router.get('/feed', function(req,res,next) {
 res.render('index', { title: 'feed' });
 });

/* GET message page */
router.get('/message', function(req,res,next) {
 res.render('message', { title: 'messages' });
 });

 router.get('/about', function(req,res,next) {
 res.render('about', { title: 'about' });
 });

  router.get('/slide', function(req,res,next) {
 res.render('slide', { title: 'slide' });
 });
 
 
 router.post('/login', function(req, res, next){
    console.log(req.body.uname);
    console.log(req.body.pass);
	//res.header("Access-Control-Allow-Methods",'GET');
	return res.redirect('/');
});
module.exports = router;
