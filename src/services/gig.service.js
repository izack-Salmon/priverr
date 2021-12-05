import { asyncStorageService } from "./async-storage.service.js";
import { storageService } from "./storage.service.js";
import { utilService } from "./util.service.js";
import { userService } from "./user.service.js";
// import axios from "axios";
import Axios from "axios";
var axios = Axios.create({ withCredentials: true, });

const KEY = 'gigsDB';

//for the start with no backend
_createGigs()


const BASE_URL =
    process.env.NODE_ENV !== "development"
        ? "/api/gig"
        : "//localhost:3030/api/gig";

export const gigService = {
    query,
    getById,
    remove,
    save,
    getLabes,
}

function query(filterBy = {}) {
    return asyncStorageService.query(KEY);
    // return axios.get(BASE_URL, { params: filterBy }).then((res) => res.data)
}
function getById(id) {
    // return axios.get(BASE_URL + `/${id}`).then((res) => res.data)
    return asyncStorageService.get(KEY, id);
}
function remove(id) {
    // return axios.delete(BASE_URL + `/${id}`).then((res) => res.data)
    return asyncStorageService.remove(KEY, id);
}
function save(gig) {
    // return (gig._id) ? axios.put(BASE_URL + `/${gig._id}`, gig).then((res) => res.data) : axios.post(BASE_URL + '/', gig).then((res) => res.data)
    const savedGig = gig._id ? asyncStorageService.put(KEY, gig) : asyncStorageService.post(KEY, gig);
    return savedGig;
}


function getLabes() {
    return labels
}


function getEmptyGig() {
    return {
        name: '',
        inStock: true,
        price: utilService.getRandomInt(10, 100),
        createdAt: Date.now(),
        reviews: [],
        labels: getRandomLabel(),
    };
}



async function _createGigs() {
    // console.log('im heere to ');
    var gigs = storageService.load(KEY);
    var gUsers = await userService.getUsers()
    console.log(gUsers);
    if (!gigs || !gigs.length) {
        gigs = [_createGig('music', gUsers.shift()), _createGig('music', gUsers.shift()), _createGig('web dev', gUsers.shift()), _createGig('art', gUsers.shift(),),_createGig('NFT-Art', gUsers.shift())];
        gigs = await Promise.all(gigs)
        // console.log(gigs);
        storageService.store(KEY, gigs);
    }
    return gigs;
}

async function _createGig(description, user) {
    console.log('user-gig-serv', user);
    var { _id, fullname, imgUrl } = user
    const miniUser = {
        _id,
        fullname,
        imgUrl,
        rate: utilService.getRandomInt(3, 5),
        level: 'level 2 seller',
    }
    // console.log(miniUser);
    return {
        _id: utilService.makeId(),
        title: 'I will do 2 minimalist logo design for your buisness',
        inStock: true,
        price: utilService.getRandomInt(10, 100),
        owner: miniUser,
        createdAt: Date.now(),
        daysToMake: utilService.getRandomInt(1, 10),
        description: 'This Gig is of one of many design kinds we offer. Flat design concepts are one of our fortes. For the logo to be timeless it doesn’t need to be with complex structures or patterns. It just needs to be simple, memorable and which gives a distinctive essence to your business',
        imgUrl: [
            'https://res.cloudinary.com/pivarr/image/upload/v1638435142/logo%20design/seller-2/1_ti4k8o.png',
            'https://res.cloudinary.com/pivarr/image/upload/v1638435210/logo%20design/seller-2/2_fo1hs6.png',
            'https://res.cloudinary.com/pivarr/image/upload/v1638434790/logo%20design/seller-1/1_har5gl.jpg'
        ],
        tags: [
            "artisitic",
            "proffesional",
            "accessible"
        ],
    };
}
