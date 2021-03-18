import VueRouter from 'vue-router'

import Introduce from '../views/introduceDoc.vue'
import Doc from '../views/Doc.vue'
import GetStart from '../views/getStartDoc.vue'
import Use from '../views/useDoc.vue'
import Button from '../views/button-demos.vue'
import Grid from '../views/grid-demos.vue'
import Input from '../views/input-demos.vue'
import Tabs from '../views/tabs-demos.vue'
import Layout from '../views/layout-demos.vue'
import Toast from '../views/toast-demos.vue'
import Popover from '../views/popover-demos.vue'
import Other from '../views/other-demos.vue'

const routes = [
    { path: '/', component: Doc, redirect: '/introduce', },
    {
        path: '/doc',
        component: Doc,
        children: [
            { path: '/introduce', component: Introduce },
            { path: '/getStart', component: GetStart },
            { path: '/use', component: Use },
            { path: '/button', component: Button },
            { path: '/grid', component: Grid },
            { path: '/input', component: Input },
            { path: '/layout', component: Layout },
            { path: '/popover', component: Popover },
            { path: '/tabs', component: Tabs },
            { path: '/toast', component: Toast },
            { path: '/other', component: Other },
        ]
    },
]


export default new VueRouter({
    routes,
    scrollBehavior() { //to top
        return { x: 0, y: 0 }
    }
})