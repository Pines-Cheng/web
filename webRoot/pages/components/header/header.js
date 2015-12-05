/**
 * Created by spider on 15/11/25.
 */

require('./header.css');
require('UTIL_PATH/alert');

$(function () {
    //设置header
    $(function () {
        initHeaderSelectedClass();
        initDorpDownMenu();
        initUserLogo();
        initEvent();
    });

    //初始化头中得绑定事件
    function initEvent() {
        $('#header_logout').on('click', function () {
            console.log('XXX');
            userService.logout();
            window.location.href = window.location.origin + "/index.html#/user/login";
            //location.reload();
            setTimeout(function () {
                location.reload();
            }, 20)
        });

        $('#header_nav_stategy').on('click', function () {
            $.alertMessage('该功能暂未开放，去其他地方逛逛吧！');
        });


        $('#home_android_load').on('click', function () {
            $.alertAndroid()
        });

        $('#home_IOS_load').on('click', function () {
            $.alertMessage('IOS正在审核中，请稍等...')
        });
    }


//初始化菜单
    function initDorpDownMenu() {
        $('#combination_menu').dropdown();
        $('#combination_menu').click(function () {
            $('#combination_menu').dropdown('close');
        })
        $('#activity_menu').dropdown();
        $('#activity_menu').click(function () {
            $('#activity_menu').dropdown('close');
        })
        $('#user_menu').dropdown();
        $('#user_menu').click(function () {
            $('#user_menu').dropdown('close');
        })
    };

//获取$location 包含的设置效果
    function initHeaderSelectedClass() {
        var locationStr = window.location.href;
        if (locationStr.indexOf("combination") >= 1) {
            $("#header_nav_combination").addClass('cs_nav_selected');
        }

        else if (locationStr.indexOf("activity") >= 1) {
            $("#header_nav_activity").addClass('cs_nav_selected');
        }
       else  if (locationStr.indexOf("about") >= 1) {
            $("#header_nav_about").addClass('cs_nav_selected');
        }
        else {
            $("#header_nav_home").addClass('cs_nav_selected');
        }
    }

//设置不同状态下user下拉菜单的现实
    function initUserLogo() {
        if (userService.isLogin()) {
            $('#header_username').html(userService.getUserName());
            $('.header_logout_flag').css('display', 'none');
            $('.header_login_flag').css('display', 'block');
        } else {
            $('.header_logout_flag').css('display', 'block');
            $('.header_login_flag').css('display', 'none');
        }
    }

    var userService = (function () {
        //判断是否登录
        function isLogin() {
            if ($.AMUI.utils.cookie.get('dayu_cookie') === null || $.AMUI.utils.cookie.get('dayu_cookie') === undefined) {
                return false;
            } else {
                return true;
            }
        }

        function getUserId() {
            if (this.isLogin()) {
                return this.getCookie().user.id;
            } else {
                return 10;
            }
        }

        function getUserName() {
            if (this.isLogin()) {
                return this.getCookie().user.username;
            } else {
                return '';
            }
        }

        function getToken() {
            if (this.isLogin()) {
                return this.getCookie().token.token;
            } else {
                return '';
            }
        }

        function getUserIntro() {
            if (this.isLogin()) {
                return this.getCookie().user.intro;
            } else {
                return '';
            }
        }

        function getTel() {
            if (this.isLogin()) {
                return this.getCookie().user.tel;
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

        return {
            isLogin: isLogin,
            getUserId: getUserId,
            getUserName: getUserName,
            getToken: getToken,
            getUserIntro: getUserIntro,
            getTel: getTel,
            logout: logout,
            getCookie: getCookie
        }
    })();
});