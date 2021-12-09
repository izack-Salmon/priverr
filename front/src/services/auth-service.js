import Axios from "axios";
import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service'
var axios = Axios.create({ withCredentials: true, });

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
    return user.data
}
async function logout() {
    var user = await axios.post(`${BASE_URL}/logout`)
    return user.data
}
async function signup(user) {
    console.log(user);
    var user = await axios.post(`${BASE_URL}/signup`, user)
    return user.data
}
