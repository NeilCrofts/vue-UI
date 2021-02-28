import Vue from 'vue'
import Button from './button'
import icon from './icon'
Vue.component('g-button', Button)
Vue.component('g-icon', icon)
var vm = new Vue({
    el: '#app',
    data: {
        isLoading1: true,
        isLoading2: false,
        isLoading3: false,
    },
    methods: {}
});