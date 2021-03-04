import Vue from 'vue'
import Button from './button'
import icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
Vue.component('g-button', Button)
Vue.component('g-icon', icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.use(plugin)

var vm = new Vue({
    el: '#app',
    data: {
        isLoading1: true,
        isLoading2: false,
        isLoading3: false,
        message: 'Hello'
    },
    methods: {
        inputChange(e) {
            console.log(e.target);
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            //调用plugin.js绑定的Vue原型方法
            this.$toast(`你的智商余额为:${parseInt(Math.random()*100)},请充值`, {
                closeButton: {
                    text: '马上充值',
                    callback: () => {
                        console.log('用户说他知道了');
                    }
                },
                enableHtml: true,
                autoClose: false,
                autoCloseDelay: 3,
                position,
            })
        }
    },
    created() {}
});


import chai from 'chai';
import spies from 'chai-spies'
chai.use(spies)
    // const expect = chai.expect;