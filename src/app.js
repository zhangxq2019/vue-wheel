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

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
{
    // console.log(Button)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    // 动态生成按钮
    let useElement = vm.$el.querySelector('use')
    console.log(useElement)
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    console.log(useElement)
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
}
{
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
    // 动态生成按钮
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
        }
    })
    vm.$mount()
    let spy = chai.spy(()=>{})
    vm.$on('click',spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}