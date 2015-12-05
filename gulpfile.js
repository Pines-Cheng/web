/**
 * Created by spider on 15/11/25.
 */
var gulp = require("gulp");
var gutil = require("gulp-util");
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var fs = require('fs-extra');
var del = require('del');
var glob = require('glob');
var path = require('path');

var paths = {
    scripts: ['webRoot/pages/**/*.js' ],
    images: 'webRoot/pages/**/images/*',
    partials:'webRoot/pages/components/**/*.html',
    pages:'webRoot/pages/**/*'
};

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(
        // configuration
        require('./webpack.config')
    , function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack({
        // configuration
    });

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
            if(err) throw new gutil.PluginError("webpack-dev-server", err);
            // Server listening
            gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
            // keep the server alive or continue?
            // callback();
        });
});

gulp.task('clean', function (callback) {
   del(['public/dist/*'],callback);
});



// Copy all static images
gulp.task('images', function() {
    return gulp.src(paths.images)
        // Pass in options to the task
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('public/dist/images'));
});

// Copy all static images
gulp.task('images-copy', function() {
    return gulp.src(paths.images)
        // Pass in options to the task
        //.pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('public/dist/images'));
});

// Copy all static images
gulp.task('partials', function(callback) {
    var partialsPaths = glob.sync(path.join(__dirname,paths.partials));
    console.log(partialsPaths);
    for(var i in partialsPaths){
        var filename = path.basename(partialsPaths[i]);
        fs.copy(partialsPaths[i],path.join(__dirname,'/public/dist/partials/')+filename, function () {

        });
    }
});

gulp.task('watch', function () {
    gulp.watch(path.join(__dirname,paths.pages),['webpack']);
    gulp.watch(path.join(__dirname,paths.images),['images-copy']);
    gulp.watch(path.join(__dirname,paths.partials),['partials']);
});

gulp.task('default',['webpack','images-copy','partials'], function (callback) {

});

gulp.task('dist',['webpack','images','partials'], function (callback) {

});