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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

var vm = new Vue({
    el: '#app',
    data: {
        isLoading1: true,
        isLoading2: false,
        isLoading3: false,
        message: 'Hello',
        selectedTab: ['2'],
    },
    methods: {
        yyy() {
            console.log('yyy');
        },
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
                autoClose: 3,
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