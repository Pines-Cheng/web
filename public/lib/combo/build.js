({

    baseUrl: './', //基于requirejs的目录
    shim: {
        'amazeui': {
            deps: ['jquery']
        },
    },
    paths: {
        //lib
        jquery: 'lib/jquery/jquery.min',
        amazeui: 'lib/amazeui/amazeui.min',
        // avalon: 'lib/avalon/avalon',
        md5: 'lib/md5/md5',
        //combo lib
        text: 'lib/combo/text',
        domReady: 'lib/combo/domReady',
        "css-builder": "lib/combo/css-builder",
        "normalize": "lib/combo/normalize",
        //ajax service components
        service: 'components/service',
        //tpls
        tpls: 'components/tpls',

    },

    appDir: '../../',

    //和require.config共用配置文件
    // mainConfigFile: '../../pages/config.js',

    dir: '../../dist',

    skipDirOptimize: true,
    //需找嵌套的依赖
    findNestedDependencies: true,

    // 相对于baseUrl
    modules: [{
        name: 'pages/login/main',
        // include:['login/login']
    }],


    // name: "pages/login/main", //如果从哪一个文件开始合并
    // out: "../../pages/login/main_build.js" //确定要生成的文件路径及名字
})
