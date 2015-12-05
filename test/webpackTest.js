/**
 * Created by spider on 15/11/26.
 */
/**
 * Created by spider on 15/11/22.
 */
// webpack.config.js
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var glob = require('glob');
var appRoot = require('app-root-path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Clean = require('clean-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');

var mode = 'dev';

//diffrent
module.exports = {};
module.exports.plugins = [];

if (mode === 'dev') {

}
if (mode === 'run') {
    module.exports.plugins.push(new uglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
}

module.exports.plugins=module.exports.plugins.concat([
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        //css 独立插件
        new ExtractTextPlugin('[name]_[contenthash:20].css'),
        new AssetsPlugin({filename:'public/dist/assets-map.json',prettyPrint: true}),
        //清理大师
        new Clean(['./public/dist'])],
    getHtmlwebpackPlugin('/public/pages/**/**/*.entry.html')
);

//通过函数统一获取入口
module.exports.entry = getEntry('/public/pages/**/**/*.entry.js');


module.exports.output = {
    path: './public/dist/', // This is where images AND js will go
    publicPath: '/dist/', // This is used to generate URLs to e.g. images
    filename: '[name]_[chunkhash:20].bundle.js'
};

module.exports.module = {
    loaders: [
        //{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
        {test: /\.html$/, loader: "html-loader"},
        {test: /\.gif$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file-loader"},
        {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")},
        //{test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader?{cascade:false,browsers:["last 3 version", "> 1%", "ie > 7"]}'},
        {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
};

module.exports.externals = {
    // require("jquery") is external and available
    //  on the global var jQuery
    "jquery": "jQuery"
};

//module.exports.devtool = 'source-map';

function getEntry(pathReg){
    var mainPaths = glob.sync(path.join(appRoot.path,pathReg));
    var entrys={};
    console.log(mainPaths);
    for(var i in mainPaths){
        var keyName = mainPaths[i].split('/pages/')[1].replace(new RegExp(path.sep, 'g'),"_").replace("_"+path.basename(mainPaths[i]),'');
        //_.extend(entrys,{keyName:mainPaths[i]});
        console.log(keyName);
        entrys[keyName]=mainPaths[i];
    }
    return entrys;
}

function getHtmlwebpackPlugin(pathReg){
    var indexPaths = glob.sync(path.join(appRoot.path,pathReg));
    var plugins=[];
    for(var i in indexPaths){
        var keyName = indexPaths[i].split('/pages/')[1].replace(new RegExp(path.sep, 'g'),"_").replace("_"+path.basename(indexPaths[i]),'');
        console.log('22:'+keyName)
        plugins.push(new HtmlwebpackPlugin({
            filename: keyName+'.html',
            template: indexPaths[i],
            inject: 'html',
            chunks:[keyName]
        }));
    }
    return plugins;
}

getHtmlwebpackPlugin('/webRoot/pages/**/**/*.entry.html');
getEntry('/webRoot/pages/**/**/*.entry.js');
console.log('finished');


