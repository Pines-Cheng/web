/**
 * Created by spider on 15/11/29.
 */
var $script = require("scriptjs");
$script(["http://libs.baidu.com/jquery/2.1.4/jquery.min.js",
    "http://cdn.amazeui.org/amazeui/2.4.2/js/amazeui.min.js"], $);
$script($, function () {

    function login(params) {
        params.URL = SERVICE_URL + URL.user.login;
        params.callback = 'JSON_CALLBACK';
        return $http.jsonp(JSONP_SERVICE + "?" + $.param(params)).success(function (data) {
            if (data.stat === "OK") {
                //设置cookie
                var dayu_cookie = {
                    token: data.token,
                    user: data.user
                };
                $.AMUI.utils.cookie.set('dayu_cookie', JSON.stringify(dayu_cookie));
            }
        });
    }

    function register(params) {
        params.URL = SERVICE_URL + URL.user.register;
        params.callback = 'JSON_CALLBACK';
        return $http.jsonp(JSONP_SERVICE + "?" + $.param(params)).success(function (data) {
        });
    }

//判断是否登录
    function isLogin() {
        if ($.AMUI.utils.cookie.get('dayu_cookie') === null || $.AMUI.utils.cookie.get('dayu_cookie') === undefined) {
            return false;
        } else {
            return true;
        }
    }

    function getUserId() {
        if (isLogin()) {
            return getCookie().user.id;
        } else {
            return 10;
        }
    }

    function getUserName() {
        if (isLogin()) {
            // console.dirxml($.cookies.get('dayu_cookie'));
            return getCookie().user.username;
        } else {
            return '';
        }
    }

    function getToken() {
        if (isLogin()) {
            //console.dirxml($.cookies.get('dayu_cookie'));
            return getCookie().token.token;
        } else {
            return '';
        }
    }

    function getUserIntro() {
        if (isLogin()) {
            return getCookie().user.intro;
        } else {
            return '';
        }
    }

    function getTel() {
        if (isLogin()) {
            return getCookie().user.tel;
        } else {
            return '';
        }
    }

    function logout() {
        $.AMUI.utils.cookie.unset('dayu_cookie');
        //$location.path('/user/login');
    }

    function getCookie() {
        return JSON.parse($.AMUI.utils.cookie.get('dayu_cookie'));
    }

//重定向到登陆页
    function redirectToLogin() {
        $location.path('/user/login');
    }

    module.exports = {
        login: login,
        register: register,
        isLogin: isLogin,
        getUserId: getUserId,
        getUserName: getUserName,
        getUserIntro: getUserIntro,
        getToken: getToken,
        getTel: getTel,
        logout: logout,
        redirectToLogin: redirectToLogin
    };

});

