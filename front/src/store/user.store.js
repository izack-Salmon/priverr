import { userService } from '../services/user.service';
import { authService } from '../services/auth-service';

export const userStore = {
    state: {
        loginUser: userService.getLoggedinUser(),
        users: '',
        currOwner: '',
        username: '',
        UserId: '',
    },
    getters: {
        currOwner(state) {
            // console.log(state.currOwner);
            return state.currOwner
        },
        logginUser(state) {
            // console.log(state.loginUser);
            return state.loginUser
        },
        //for the start with no backend
        users(state) {
            return state.users
        },
        userName(state) {
            return state.username
        },
        userId(state) {
            // console.log(state.UserId);
            return state.UserId
        }
    },
    mutations: {
        //for the start with no backend
        loadUser(state, { users }) {
            state.users = users
        },
        login(state, { user }) {
            console.log(user);
            state.loginUser = user
            state.username = user.username
            state.UserId = user._id;
            // console.log(state.loginUser);
        },
        logout(state) {
            state.loginUser = '';

        },
        setCurrOwner(state, { owner }) {
            // console.log('setterowner:', owner)
            state.currOwner = owner;
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
            // console.log('user store', user);
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
        },
        async removeSellerGig({ commit }, { gigId }) {
            // console.log(gigId);
            // var gig = await userService.removeGig(gigId)
            // commit({ type: 'removeOrder', gig });
            // return gig
        },
    },
}