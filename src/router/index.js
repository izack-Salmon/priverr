import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/piverr-app.vue'
import explore from '../views/explore.vue'
import gigDetails from '../views/gig-details.vue'
import gigEdit from '../views/gig-edit.vue'

Vue.use(VueRouter)

<<<<<<< HEAD
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
=======
const routes = [
  {
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
>>>>>>> fa0f7436f2e6b0575919d71c9dc7f3686e84f760
]

const router = new VueRouter({
    routes
})

export default router