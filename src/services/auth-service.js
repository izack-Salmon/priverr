import Axios from "axios";
var axios = Axios.create({withCredentials:true,});

export const authService = {
    login,
    logout,
    signup,
}

const BASE_URL =
    process.env.NODE_ENV !== "development"
        ? "/api/auth"
        : "//localhost:3030/api/auth";

function login(user) {
    return axios.post(`${BASE_URL}/login`, user).then((res) => res.data)
}
function logout() {
    return axios.post(`${BASE_URL}/logout`).then((res) => res.data)
}
function signup(user) {
    console.log(user);
    return axios.post(`${BASE_URL}/signup`, user).then((res) => res.data)
}
