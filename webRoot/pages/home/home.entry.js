/**
 * Created by spider on 15/11/22.
 */
require('./styles.css');
require('../components/header/header');

(function () {
    initImg();
})();


//初始化图片
function initImg() {
    $('.am-slider').flexslider({
        controlNav: false
    });
    $(".dy_android_icon").mouseover(function () {
        $(this).attr("src",  require('./images/android_hover.png'));
    }).mouseout(function () {
        $(this).attr("src", require('./images/android_normal.png'))
    });
    $(".dy_ios_icon").mouseover(function () {
        $(this).attr("src",  require('./images/iphone_hover.png'))
    }).mouseout(function () {
        $(this).attr("src", require('./images/iphone_normal.png'))
    });
    $("#type_any1").mouseover(function () {
        $(this).find(".dy_banner_icon").attr("src", require('./images/comb_hover.png'))
    }).mouseout(function () {
        $(this).find(".dy_banner_icon").attr("src", require('./images/comb_normal.png'))
    });
    $("#type_any2").mouseover(function () {
        $(this).find(".dy_banner_icon").attr("src",require('./images/news_hover.png'))
    }).mouseout(function () {
        $(this).find(".dy_banner_icon").attr("src",  require('./images/news_normal.png'))
    });
    $("#type_any3").mouseover(function () {
        $(this).find(".dy_banner_icon").attr("src", require('./images/type_select_hover.png'))
    }).mouseout(function () {
        $(this).find(".dy_banner_icon").attr("src", require("./images/type_select_normal.png"))
    });
    $("#type_any4").mouseover(function () {
        $(this).find(".dy_banner_icon").attr("src", require("./images/data_select_hover.png"))
    }).mouseout(function () {
        $(this).find(".dy_banner_icon").attr("src", require("./images/data_select_normal.png"))
    })
}