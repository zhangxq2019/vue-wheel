import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
})

//单元测试
//四个部分
//icon
//loading
//iconPosition

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

{
    //判断icon是否正确
    // console.log(Button)
    const Constructor = Vue.extend(Button)
    //Vue.extend+vm.$mount组合
    //Button是一个对象，vue.extend()将Button生成一个构造函数
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })//vm就是Button的实例，可以挂载到任一指定页面
    vm.$mount()
    // 动态生成按钮
    let useElement = vm.$el.querySelector('use')
    // console.log(useElement)
    let href = useElement.getAttribute('xlink:href')
    // console.log(href);
    expect(href).to.eq('#i-setting')
}

{
    //判断loading是否正确
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    // console.log(useElement)
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
}

{
    //判断iconPosition的位置 order
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition:'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    // console.log(svg);
    let {order} = window.getComputedStyle(svg)
    // console.log(order)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{
    //
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
        }
    })
    vm.$mount('.test')
    //生成一个间谍函数代替原来的函数，如果click触发了就执行这个间谍函数
    let spy = chai.spy(()=>{})
    vm.$on('click',spy)
    let button = vm.$el
    //点击
    button.click()
    //判断间谍函数是否被调用了
    expect(spy).to.have.been.called()
}