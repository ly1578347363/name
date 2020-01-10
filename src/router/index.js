import Vue from 'vue'
//vue-router路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import login from '@/components/login.vue'
const routes = [

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }

    {
        path: '/login',
        component: login
    }
]

const router = new VueRouter({
    routes
})

export default router