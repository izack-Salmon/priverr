import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/piverr-app.vue'
import explore from '../views/explore.vue'
import gigDetails from '../views/gig-details.vue'
import gigEdit from '../views/gig-edit.vue'
import userDetails from '../views/gig-details.vue'
import dashboard from '../views/dashboard.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: home
},
{
    path: '/explore',
    name: 'explore',
    component: explore
},
{
    path: '/gig/Details/:id',
    name: 'gigDetails',
    component: gigDetails
},
{
    path: '/gig/edit',
    name: 'gigEdit',
    component: gigEdit
},
{
    path: '/user/:id',
    name: 'userDetails',
    component: userDetails
},
{
    path: '/user/dashboard',
    name: 'dashboard',
    component: dashboard
},
]

const router = new VueRouter({
    routes,
})

export default router