import VueRouter from 'vue-router'

import Button from '../views/button-demos.vue'
import GetStart from '../views/getStartDemos.vue'
import Grid from '../views/grid-demos.vue'
import Input from '../views/input-demos.vue'
import Layout from '../views/layout-demos.vue'
import Popover from '../views/popover-demos.vue'
import Tabs from '../views/tabs-demos.vue'
import Toast from '../views/toast-demos.vue'
import Introduce from '../views/introduce-demos.vue'

const routes = [
    { path: '/', component: Introduce },
    { path: '/button', component: Button },
    { path: '/getStart', component: GetStart },
    { path: '/grid', component: Grid },
    { path: '/input', component: Input },
    { path: '/layout', component: Layout },
    { path: '/popover', component: Popover },
    { path: '/tabs', component: Tabs },
    { path: '/toast', component: Toast },
]


export default router = new VueRouter({
    routes
})