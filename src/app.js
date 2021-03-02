import Vue from 'vue'
import Button from './button'
import icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
Vue.component('g-button', Button)
Vue.component('g-icon', icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
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