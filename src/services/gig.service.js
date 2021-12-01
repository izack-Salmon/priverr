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
    if (!gigs || !gigs.length) {
        gigs = [_createGig('music', gUsers.shift()), _createGig('web dev', gUsers.shift()), _createGig('art', gUsers.shift())];
        gigs = await Promise.all(gigs)
        // console.log(gigs);
        storageService.store(KEY, gigs);
    }
    return gigs;
}

async function _createGig(description, user) {
    var { _id, fullname, imgUrl } = user
    const miniUser = {
        _id,
        fullname,
        imgUrl,
    }
    // console.log(miniUser);
    return {
        _id: utilService.makeId(),
        title: 'i will',
        inStock: true,
        price: utilService.getRandomInt(10, 100),
        owner: miniUser,
        createdAt: Date.now(),
        daysToMake: utilService.getRandomInt(1, 10),
        description,
        imgUrl: [],
        tags: [
            "artisitic",
            "proffesional",
            "accessible"
        ],
    };
}
