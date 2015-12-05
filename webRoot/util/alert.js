/**
 * Created by spider on 15/11/28.
 */

require('LIB_PATH/fancybox/jquery.fancybox.pack.js');

//jquery拓展
$.extend({
    alertMessage:alertMessage,
    alertAndroid:alertAndroid
});

//弹出消息，可拓展成jquery插件
function alertMessage(message) {
    $.fancybox.open({
        minWidth: 30,
        // minWidth: 400,
        minHeight: 20,
        // fitToView: true,
        // width: '100%',
        // height: '70%',
        autoSize: true,
        closeBtn: false,
        closeClick: true,
        openEffect: 'none',
        closeEffect: 'none',
        afterClose: function () {
            //重新初始化页面默认执行的函数
            // $scope.init();
            // $route.reload();
        },
        afterShow: function () {
            setTimeout(function () {$.fancybox.close();}, 1000);
        },
        helpers: {
            overlay: null
        },
        content: message+'<style>.fancybox-skin {background-color: #2b2b2b;color: white;opacity:0.9;filter:alpha(opacity=90)}</style>',
        type: 'html'
    });
}

//弹出消息
function alertAndroid() {
    $.fancybox.open({
        //minWidth: 317,
        //minWidth: 400,
        //minHeight: 317,
        //fitToView: true,
        // width: '100%',
        // height: '70%',
        scrolling: 'no',
        autoSize: true,
        closeBtn: false,
        closeClick: true,
        openEffect: 'none',
        closeEffect: 'none',
        afterClose: function () {
            //重新初始化页面默认执行的函数
            // $scope.init();
            // $route.reload();
        },
        content: '<div id="tinycontent" style="display: block;"> <div> <p>扫描二维码下载</p><img width="280px" height="280px" src="dist/images/components/header/images/app.png"></div> </div>',
        type: 'html'

    });
}