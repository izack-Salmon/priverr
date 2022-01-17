import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/piverr-app.vue'
import explore from '../views/explore.vue'
import gigDetails from '../views/gig-details.vue'
import userDetails from '../views/user-details.vue'
import userEditGig from '../views/user-edit-gig.vue'
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
    path: '/explore/:tag',
    name: 'exploreTag',
    component: explore
},
{
    path: '/explore/:search',
    name: 'exploreSearch',
    component: explore
},
{
    path: '/gig/Details/:id',
    name: 'gigDetails',
    component: gigDetails
},
{
    path: '/user/:id',
    name: 'userDetails',
    component: userDetails
},
{
    path: '/user/:id/editGig',
    name: 'userAddGig',
    component: userEditGig
},
{
    path: '/user/:id/editGig/:gigId',
    name: 'userEditGig',
    component: userEditGig
},
]

const router = new VueRouter({
    routes,
})

export default router