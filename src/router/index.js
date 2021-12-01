import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/piverr-app.vue'
import explore from '../views/explore.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/explore',
        name: 'Home',
        component: explore
    },
    {
        path: '/gig/Details/:id',
        name: 'Home',
        component: home
    },
    {
        path: '/gig/edit',
        name: 'Home',
        component: home
    },
    {
        path: '/user/:id',
        name: 'Home',
        component: home
    },
    {
        path: '/user/dashboard/',
        name: 'dashboard',
        component: home
    },
]

const router = new VueRouter({
    routes
})

export default router