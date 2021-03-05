module.exports = {
    base:'/vue-wheel/',
    title: 'Wheel-UI',
    description: '一个简单好用的UI框架',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            {text: '主页',link:'/'},
            {text: '文档',link:'/install/'},
            {text: 'github',link:'https://github.com/zhangxq2019/vue-wheel'}
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    '/components/button',
                    '/components/button-group',
                    '/components/input',
                    '/components/collapse',
                    '/components/layout',
                ]
            }
        ]
    }
}