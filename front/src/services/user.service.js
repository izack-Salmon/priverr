import { asyncStorageService } from './async-storage.service.js'
import { storageService } from './storage.service'
import { httpService } from './http.service'
import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service'
import { utilService } from "./util.service.js";

import Axios from "axios";
var axios = Axios.create({ withCredentials: true, });

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

var gWatchedUser = null;
const KEY = 'userDB';

// _createUsers()

export const userService = {
    // asyncGetUsers,
    login,
    logout,
    signup,
    getLoggedinUser,
    getUsers,
    getById,
    remove,
    update,
    // changeScore
}
const BASE_URL =
    process.env.NODE_ENV !== "development" ?
        "/api/user" :
        "//localhost:3030/api/user";

// Debug technique
window.userService = userService

// function getUsers() {
//     return storageService.load(KEY)
// }

async function getUsers() {
    // var users = await asyncStorageService.query(KEY)
    // return users
    return httpService.get(`user`)
}

async function getById(userId) {
    // console.log(userId);
    // const user = await asyncStorageService.get(KEY, userId)
    // console.log(KEY);
    // console.log('user', user);
    const user = await httpService.get(`user/${userId}`)
    gWatchedUser = user;
    console.log(user)
    return user;
}

function remove(userId) {
    // return asyncStorageService.remove(KEY, userId)
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    // await asyncStorageService.put(KEY, user)
    var user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) _saveLocalUser(user.data)
    return user.data;
}

async function login(userCred) {
    // const users = await asyncStorageService.query(KEY)
    // const user = users.find(user => user.username === userCred.username)
    // return _saveLocalUser(user)

    const user = await httpService.post('auth/login', userCred)
    socketService.emit('set-user-socket', user.data._id);
    if (user.data) return _saveLocalUser(user.data)
    return user.data
}
async function signup(userCred) {
    userCred.score = 10000;
    // const user = await asyncStorageService.post(KEY, userCred)
    const user = await httpService.post('auth/signup', userCred)
    socketService.emit('set-user-socket', user.data._id);
    return _saveLocalUser(user.data)
}
async function logout() {
    // sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    socketService.emit('unset-user-socket');
    return await httpService.post('auth/logout')
}

// async function changeScore(by) {
//     const user = getLoggedinUser()
//     if (!user) throw new Error('Not loggedin')
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }


function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}


// (async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })();



// This IIFE functions for Dev purposes 
// It allows testing of real time updates (such as sockets) by listening to storage events
(async () => {
    var user = getLoggedinUser()
    // Dev Helper: Listens to when localStorage changes in OTHER browser

    // Here we are listening to changes for the watched user (comming from other browsers)
    window.addEventListener('storage', async () => {
        if (!gWatchedUser) return;
        const freshUsers = await asyncStorageService.query('user')
        const watchedUser = freshUsers.find(u => u._id === gWatchedUser._id)
        if (!watchedUser) return;
        if (gWatchedUser.score !== watchedUser.score) {
            console.log('Watched user score changed - localStorage updated from another browser')
            socketService.emit(SOCKET_EVENT_USER_UPDATED, watchedUser)
        }
        gWatchedUser = watchedUser
    })
})();

function _createUser(fullname) {
    return {
        rate: Math.round(Math.random * utilService.getRandomInt(4, 5) * 10) / 10,
        _id: utilService.makeId(),
        fullname,
        imgUrl: 'https://res.cloudinary.com/pivarr/image/upload/v1638435059/logo%20design/seller-2/avatar_z3dsdo.jpg',
        isAdmin: false,
        username: fullname,
        password: '123',
        isSeller: false,
        reviews: [{
            "id": utilService.makeId(),
            "txt": "Very kind and works fast and still shit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus inventore nisi obcaecati officia libero aperiam id nesciunt dolorum debitis dolor error dolorem placeat fugit, explicabo voluptates neque, asperiores dolore officiis?",
            "rate": 5,
            "by": {
                "_id": "u102",
                "fullname": "yaron",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/3ec0d56f436079ef157dbcc1d21c4c62-1625030446037/1c926a30-7aa5-4de8-9a3b-6565be7ddd5b.jpg"
            }
        },
        {
            "id": utilService.makeId(),
            "txt": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus inventore nisi obcaecati officia libero aperiam id nesciunt dolorum debitis dolor error dolorem placeat fugit, explicabo voluptates neque, asperiores dolore officiis?                ",
            "rate": 4.5,
            "by": {
                "_id": "u102",
                "fullname": "code acadmy",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/3ec0d56f436079ef157dbcc1d21c4c62-1625030446037/1c926a30-7aa5-4de8-9a3b-6565be7ddd5b.jpg"
            },
        },
        {
            "id": utilService.makeId(),
            "txt": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus inventore nisi obcaecati officia libero aperiam id nesciunt dolorum debitis dolor error dolorem placeat fugit, explicabo voluptates neque, asperiores dolore officiis?                ",
            "rate": 4.5,
            "by": {
                "_id": "u102",
                "fullname": "hard code",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/3ec0d56f436079ef157dbcc1d21c4c62-1625030446037/1c926a30-7aa5-4de8-9a3b-6565be7ddd5b.jpg"
            },
        },
        ]
    }
}

function _createUsers() {
    var users = storageService.load(KEY);
    if (!users || !users.length) {
        users = [_createUser('paz'), _createUser('revital'), _createUser('izack'), _createUser('yaron'), _createUser('Baba')];
        storageService.store(KEY, users);
    }
    return users;
}

// This is relevant when backend is connected
// (async () => {
//     var user = getLoggedinUser()
//     if (user) socketService.emit('set-user-socket', user._id)
// })();