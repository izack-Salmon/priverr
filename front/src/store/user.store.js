import { userService } from '../services/user.service';
import { authService } from '../services/auth-service';

export const userStore = {
    state: {
        loginUser: '',
        users: '',
        currOwner: '',
    },
    getters: {
        currOwner(state) {
            return state.currOwner
        },
        logginUser(state) {
            // console.log(state.loginUser);
            return state.loginUser
        },
        //for the start with no backend
        users(state) {
            return state.users
        }
    },
    mutations: {
        //for the start with no backend
        loadUser(state, { users }) {
            state.users = users
        },
        login(state, { user }) {
            state.loginUser = user
            // console.log(state.loginUser);
        },
        logout(state) {
            state.loginUser = '';
        },
        setCurrOwner(state, { owner }) {
            console.log('setterowner:', owner)
            // state.currOwner = owner;

        }
    },
    actions: {
        async getUserReviews({ commit }, { ownerId }) {
            var owner = await userService.getById(ownerId);
            commit({ type: 'setCurrOwner', owner })
        },
        //for the start with no backend
        async loadUser({ commit }) {
            var users = await userService.getUsers()
            commit({ type: 'loadUser', users })
        },
        async login({ commit }, { user }) {
            var user = await authService.login(user)
            // console.log(user);
            commit({ type: 'login', user })
            return user
        },
        async logout({ commit }) {
            await authService.logout()
            commit({ type: 'logout' })
        },
        async signup({ commit }, { user }) {
            await authService.signup(user)
            commit({ type: 'login', user })
        }
    },
}