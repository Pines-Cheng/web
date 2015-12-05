/**
 * Created by spider on 15/11/29.
 */

require('PAGES_PATH/components/header/header');

var vm = new Vue({
    el: '#login',
    data: {
        loginParam:{
            userName:'123',
            password:'2321'
        }
    },
    // 在 `methods` 对象中定义方法
    methods: {
        login: function (event) {
            console.log(loginParam);
        }
    }
});

// 也可以在 JavaScript 代码中调用方法
vm.login();
