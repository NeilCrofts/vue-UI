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
        }
    }
});


import chai from 'chai';
import spies from 'chai-spies'
chai.use(spies)
    // const expect = chai.expect;