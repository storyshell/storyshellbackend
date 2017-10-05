var express = require('express');
var router = express.Router();
/* GET Story Shell Menu  */
/* GET home page. */
router.get('/storyshellmenu', function(req, res) {
  res.render('storyshellmenu',{ title: 'storymenu' });
});

module.exports = router;
