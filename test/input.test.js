const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    describe('props',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('接收 value',()=> {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = wm.$el.querySelector('input')
            expect(inputElement.value).to.eq('1234')
        })
        it('接收 disabled',()=> {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = wm.$el.querySelector('input')
            expect(inputElement.disabled).to.eq(true)
        })
        it('接收 readOnly',()=> {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = wm.$el.querySelector('input')
            expect(inputElement.readonly).to.eq(true)
        })
        it('接收 error',()=> {
            vm = new Constructor({
                propsData: {
                    icon: 'error'
                }
            }).$mount()
            const useElements = vm.$el.querySelectorAll('use')
            expect(useElements.length).to.equal(1)
            expect(useElements[0].getAttribute('xlink:href').to.equal('#i-error'))
        })
    })
    describe('事件',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('支持change/input/focus/blur 事件',()=>{
            ['change','input','focus','blur'].forEach((eventName)=>{
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on(eventName,callback)
            let event = new Event(EventName);
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
            })
        })

    })

})