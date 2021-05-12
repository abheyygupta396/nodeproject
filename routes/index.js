var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { message: '' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { message: ''});
});

router.post('/register', function(req, res, next) {
  console.log(req.body);
  res.render('register', { message: 'Registered Successfully' });
  // res.send(req.body.email+req.body.password);

});

router.post('/login', function(req, res, next) {
  console.log(req.body);
  res.render('login', { message: 'Login Successfully' });
  // res.send(req.body.email+req.body.password);

});

module.exports = router;
