/**
 * Created by spider on 15/11/29.
 */

//运行模式
//var MODE = require(require('app-root-path').path+'/config').MODE;
var MODE = 'run';
var CONFIG = {};

if (MODE == 'dev') {
    //		window.TRANSMIT_SERVICE = "/Community/transmit";
    CONFIG.JSONP_SERVICE = "http://192.168.1.104:8080/Community/jsonp";
    CONFIG.SERVICE_URL = "http://192.168.1.104:8080";
    CONFIG.COMBINATION_URL = "http://192.168.1.101:8080";
    CONFIG.ACRTIVITY_URL = "http://192.168.1.104:8080";
} else if (MODE == 'run') {
    //		window.TRANSMIT_SERVICE = "/Community/transmit";
    CONFIG.JSONP_SERVICE = "http://www.fxdayu.com/Community/jsonp";
    CONFIG.SERVICE_URL = "http://www.fxdayu.com";
    CONFIG.COMBINATION_URL = "http://120.24.96.69";
    CONFIG.ACRTIVITY_URL = "http://act.fxdayu.com:8080";
}
//价格
CONFIG.GET_PRICE = "http://112.74.195.144:8080/price/all";

//后台请求服务的url
CONFIG.URL = {
    user: {
        login: CONFIG.SERVICE_URL+'/Community/user/login',
        register: CONFIG.SERVICE_URL+'/Community/user/register'
    },
    combination: {
        sortlist:CONFIG.COMBINATION_URL+ '/combination/sortlist',
        follow: CONFIG.COMBINATION_URL+'/combination/follow',
        cancelfollow:CONFIG.COMBINATION_URL+ '/combination/cancelfollow',
        hisfollow: CONFIG.COMBINATION_URL+'/combination/hisfollow',
        dissupport: CONFIG.COMBINATION_URL+'/combination/dissupport',
        support: CONFIG.COMBINATION_URL+'/combination/support',
        record: CONFIG.COMBINATION_URL+'/combination/record',
        wave: CONFIG.COMBINATION_URL+'/combination/wave',
        info: CONFIG.COMBINATION_URL+'/combination/info',
        list: CONFIG.COMBINATION_URL+'/combination/list',
        adjust: CONFIG.COMBINATION_URL+'/combination/adjust',
        add: CONFIG.COMBINATION_URL+'/combination/add',
        honorcal: CONFIG.COMBINATION_URL+'/combination/honorcal',
        competsortlist:CONFIG.COMBINATION_URL+'/combination/competsortlist'
    },
    activity: {
        toApply: CONFIG.ACRTIVITY_URL+'/Activity/activity/toApply',
        apply: CONFIG.ACRTIVITY_URL+'/Activity/activity/apply',
        userCount: CONFIG.ACRTIVITY_URL+'/Activity/activity/userCount',
        userPage: CONFIG.ACRTIVITY_URL+'/Activity/activity/userPage',
        canCompete: CONFIG.ACRTIVITY_URL+'/Activity/activity/canCompete'
    }
};

module.exports=CONFIG;
