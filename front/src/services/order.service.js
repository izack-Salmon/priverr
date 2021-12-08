import Axios from "axios";
var axios = Axios.create({ withCredentials: true, });

const KEY = 'ordersDB';

//for the start with no backend
// _createOrders()


const BASE_URL =
    process.env.NODE_ENV !== "development"
        ? "/api/order"
        : "//localhost:3030/api/order";

export const orderService = {
    query,
    getById,
    remove,
    save,
}

function query(filterBy = {}) {
    // return asyncStorageService.query(KEY);
    return axios.get(BASE_URL, { params: filterBy }).then((res) => res.data)
}
function getById(id) {
    return axios.get(BASE_URL + `/${id}`).then((res) => res.data)
    // return asyncStorageService.get(KEY, id);
}
function remove(id) {
    return axios.delete(BASE_URL + `/${id}`).then((res) => res.data)
    // return asyncStorageService.remove(KEY, id);
}
function save(order) {
    return (order._id) ? axios.put(BASE_URL + `/${order._id}`, order).then((res) => res.data) : axios.post(BASE_URL + '/', order).then((res) => res.data)
    // const savedOrder = order._id ? asyncStorageService.put(KEY, order) : asyncStorageService.post(KEY, order);
    // return savedOrder;
}