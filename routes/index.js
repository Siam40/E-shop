var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index',);
});

router.get('/cart', function(req, res) {
  res.render('cart',);
});


router.get('/checkout', function(req, res) {
  res.render('checkout',);
});

router.get('/login', function(req, res) {
  res.render('login',);
});

router.get('/404', function(req, res) {
  res.render('404',);
});
router.get('/contact-us', function(req, res) {
  res.render('contact',);
});
router.get('/blog-single', function(req, res) {
  res.render('blog-single',);
});

router.get('/blog', function(req, res) {
  res.render('blog-list',);
});

router.get('/product-details', function(req, res) {
  res.render('product details',);
});
router.get('/shop', function(req, res) {
  res.render('Products',);
});
module.exports = router;
