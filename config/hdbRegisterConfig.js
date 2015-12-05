/**
 * Created by spider on 15/11/25.
 */
//获取compoments下的所有HTML，然后注册
var fs = require('fs');
var path = require('path');
var appRoot = require('app-root-path');
var glob = require("glob");
var hbs = require('express-handlebars');
//var underscore = require('underscore');

var componentsHtmlPaths = glob.sync(path.join(appRoot.path,'/public/pages/components/**/*.html'));

for(var i in componentsHtmlPaths){
    console.log(hbs);
    //hbs.registerPartial(path.basename(componentsHtmlPaths[i],'.html'), componentsHtmlPaths[i], 'utf8');

}

