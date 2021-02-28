import Vue from 'vue'
import Button from './button'
import icon from './icon'
import ButtonGroup from './button-group'
Vue.component('g-button', Button)
Vue.component('g-icon', icon)
Vue.component('g-button-group', ButtonGroup)
var vm = new Vue({
    el: '#app',
    data: {
        isLoading1: true,
        isLoading2: false,
        isLoading3: false,
    },
    methods: {}
});