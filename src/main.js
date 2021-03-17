import Vue from 'vue'
import Button from './components/button'
import icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import Layout from './components/layout'
import Header from './components/header'
import Sider from './components/sider'
import Content from './components/content'
import Footer from './components/footer'
import Toast from './components/toast'
import plugin from './plugin'
import Tabs from './components/tabs'
import TabsHead from './components/tabs-head'
import TabsBody from './components/tabs-body'
import TabsItem from './components/tabs-item'
import TabsPane from './components/tabs-pane'
import Popover from './components/popover'
import Collapse from './components/collapse'
import CollapseItem from './components/collapse-item'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
import App from "./App.vue";
import './assets/scss/index.scss'
import 'github-markdown-css'


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


new Vue({
    router,
    render: h => h(App),
    data: {
        isLoading1: true,
        message: 'Hello',
        selectedTab: 'movie',
    },
    methods: {
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
}).$mount("#app");


// import chai from 'chai';
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect;