/**
 * Created by spider on 15/11/27.
 */
var express = require('express');
var path = require('path');
var router = express.Router();

var commonInterceptor = require('app-root-path').require('/interceptor/commonInterceptor');
console.log(path.dirname());

/* GET home page. */
router.get('/about', function(req, res, next) {
    var items = {
        title: '大鱼投资-关于大鱼',
        imageUrl:'dist/images/'
    };
    res.render('about', items);
});

module.exports = router;