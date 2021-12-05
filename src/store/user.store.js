import { userService } from '../services/user.service';
// import { authService } from '../services/auth-service.js';

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
            console.log(state.loginUser);
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
            state.loginUser = user.username
        },
        logout(state) {
            state.loginUser = '';
        },
        setCurrOwner(state, { owner }) {
            console.log(owner)
            state.currOwner = owner;
        }
    },
    actions: {
        async getUserReviews({ commit }, { ownerId }) {
            var owner = await userService.getById(ownerId)
            commit({ type: 'setCurrOwner', owner })

        },
        //for the start with no backend
        async loadUser({ commit }) {
            var users = await userService.getUsers()
            commit({ type: 'loadUser', users })
        },
        login({ commit }, { user }) {
            authService.login(user).then(() => {
                commit({ type: 'login', user })
            })
        },
        logout({ commit }) {
            authService.logout().then(() => {
                commit({ type: 'logout' })
            })
        },
        signup({ commit }, { user }) {
            authService.signup(user).then(() => {
                commit({ type: 'login', user })
            })
        }
    },
}