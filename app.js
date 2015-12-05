var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var exphbs = require('express-handlebars');
var http = require('http');

var app = express();
var routes = require('./routes/main').setRouter(app);

// view engine setup
var handlebars = exphbs.create({
    //defaultLayout: 'main',
    //helpers      : helpers,
    extname: '.html', //set extension to .html so handlebars knows what to look for

    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        __dirname+'/public/dist/partials/'
    ]
});
app.engine('html', handlebars.engine);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/public/dist/views/'));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(express.static(__dirname + '/public'));

app.use(logger('dev'));
app.use(bodyParser.json());// for parsing application/json
app.use(bodyParser.urlencoded({extended: false}));// for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data
app.use(cookieParser());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
//console.log(app.get('env'));
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        console.log(err);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var server = http.createServer(app);
server.listen(3000, function () {

});

module.exports = app;
