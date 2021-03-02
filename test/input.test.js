const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    //BDD行为驱动测试 Mocha
    it('存在.', () => {
        expect(Input).to.exist
    })
    describe('input props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接收 value', () => {
            vm = new Constructor({
                propsData: {
                    value: 'abcd',
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('abcd')
        })

        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true,
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true,
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
                // console.log(inputElement.outerHTML);
            expect(inputElement.readOnly).to.equal(true)
        })

        it('接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '你错了',
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change/input/focus/blur事件', () => {
            ['change', 'input', 'focus', 'blur']
            .forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                //绑定input的事件
                vm.$on(eventName, callback);
                //js触发input的事件 isTruth为false
                let event = new Event(eventName);
                Object.defineProperty(
                    event, 'target', {
                        value: { value: 'hi' },
                        enumerable: true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            })
        })
    })


})