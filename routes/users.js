var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

//register user
router.post('/register', function(req, res) {
            
            var name=req.body.name;
            var email=req.body.email;
            var password=req.body.password;
console.log(name);
});





module.exports = router;
