import Axios from "axios";
import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service'
var axios = Axios.create({ withCredentials: true, });

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const authService = {
    login,
    logout,
    signup,
}

const BASE_URL =
    process.env.NODE_ENV !== "development"
        ? "/api/auth"
        : "//localhost:3030/api/auth";

async function login(user) {
    console.log('hi');
    var user = await axios.post(`${BASE_URL}/login`, user)
    if (user.data) return _saveLocalUser(user.data)
    return user.data
}
async function logout() {
    var user = await axios.post(`${BASE_URL}/logout`)
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return user.data
}
async function signup(user) {
    console.log(user);
    var user = await axios.post(`${BASE_URL}/signup`, user)
    return _saveLocalUser(user.data)
    // if (user.data) return _saveLocalUser(user.data)
    // return user.data
}


function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}