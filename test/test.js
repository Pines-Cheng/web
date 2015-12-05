/**
 * Created by spider on 15/11/25.
 */
//获取所有的main.js，自动生成文件名，传入对象
var path = require('path');
var fs = require('fs');
var glob = require('glob');
var appRoot = require('app-root-path');
var _ = require('underscore');
var HtmlwebpackPlugin = require('html-webpack-plugin');



function getEntry(pathReg){
    var mainPaths = glob.sync(path.join(appRoot.path,pathReg));
    var entrys={};
    for(var i in mainPaths){
        var keyName = mainPaths[i].split('/pages/')[1].replace(new RegExp(path.sep, 'g'),"_").replace('_main.entry.js','');
        //_.extend(entrys,{keyName:mainPaths[i]});
        entrys[keyName]=mainPaths[i];
    }
    return entrys;
}

function getHtmlwebpackPlugin(pathReg){
    var indexPaths = glob.sync(path.join(appRoot.path,pathReg));
    var plugins=[];
    for(var i in indexPaths){
        var keyName = indexPaths[i].split('/pages/')[1].replace(new RegExp(path.sep, 'g'),"_").replace('_index.entry.html','');
        plugins.push(new HtmlwebpackPlugin({
            filename: keyName+'.html',
            template: indexPaths[i],
            inject: 'html',
            chunks:[keyName]
        }));
    }
    return plugins;
}

var main = getEntry('/public/pages/**/**/main.entry.js');
var index = getHtmlwebpackPlugin('/public/pages/**/**/index.entry.html');

