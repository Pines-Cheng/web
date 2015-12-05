/**
 * Created by spider on 15/11/22.
 */

var glob = require('glob');
var path = require('path');

var routePaths = glob.sync(path.join(__dirname, './**/*Route.js'));

function setRouter(app){
    //app.use('/',require('./indexRoute'));
    //app.use('/',require('./aboutRoute'));
    //app.use('/',require('./userRoute'));
    //app.use('/user/register',require('./userRoute.js'));

    for(var i in routePaths){
        app.use('/',require(routePaths[i]));
    }
}

module.exports={
    setRouter:setRouter
};
