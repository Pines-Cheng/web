/**
 * Created by spider on 15/12/3.
 */

var superagent = require('superagent');
var path = require('path');
var CONFIG = require(path.join(require('app-root-path').path,'/config/urlConfig'));

var baseUrl = '127.0.0.1:3000';

superagent.get(baseUrl + '/transmit')
    .query({URL:CONFIG.URL.user.login})
    .end(function (err, res) {
        console.log(res.body);
    });

superagent.get(baseUrl + '/transmit')
    .query({URL:CONFIG.URL.combination.sortlist})
    .end(function (err, res) {
        console.log(res.body);
    });
