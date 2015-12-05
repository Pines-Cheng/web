var express = require('express');
var path = require('path');
var router = express.Router();

var commonInterceptor = require('app-root-path').require('/interceptor/commonInterceptor');

/* GET home page. */
router.get('/', function(req, res, next) {
  var items = {
    title: '大鱼投资',
    imageUrl:'dist/images/'
  };
  //commonInterceptor.addServer(items);
  console.log(items);
  res.render('home', items);
});

module.exports = router;
