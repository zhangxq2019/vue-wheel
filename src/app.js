import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-sider',Sider)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: '123',
        selectedTab: ['2']
    },
    methods: {
        inputChange(e){
            console.log(e.target.value)
        }
    }
})

