import Vue from 'vue'
import Vuex from 'vuex'
import { gigStore } from './gig.store.js'
import { userStore } from './user.store.js'
import { orderStore } from './order.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    gigStore,
    userStore,
    orderStore,
  }
})
