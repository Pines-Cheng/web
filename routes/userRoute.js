/**
 * Created by spider on 15/11/29.
 */
var express = require('express');
var path = require('path');
var router = express.Router();

var commonInterceptor = require('app-root-path').require('/interceptor/commonInterceptor');

/* GET login page. */
router.get('/user/login', function(req, res, next) {
    var items = {
        title: '大鱼投资-登陆',
        imageUrl:'/dist/images/'
    };
    //commonInterceptor.addServer(items);
    console.log(items);
    res.render('user_login', items);
});

///* GET register page. */
router.get('/user/register', function(req, res, next) {
    var items = {
        title: '大鱼投资-注册',
        imageUrl:'/dist/images/'
    };
    res.render('user_register', items);
});

module.exports = router;