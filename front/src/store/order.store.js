
import { addOrder, removeOrder } from "../../../backend/api/order/order.controller"
import { orderService } from "../services/order.service"

export const userStore = {
    state: {
        orders: '',
    },
    getters: {
        //for the start with no backend
        orders(state) {
            return state.orders
        },
    },
    mutations: {
        //for the start with no backend
        loadOrders(state, { orders }) {
            state.orders = orders
        },
        removeOrder(state, { orderId }) {
            const idx = state.orders.findIndex((currOrder) => currOrder._id === orderId);
            state.orders.splice(idx, 1);
        },
        addGig(state, { savedOrder }) {
            state.orders.push(savedOrder);
        },
    },
    actions: {
        async loadOrders({ commit, state }) {
            var orders = await orderService.query(state.filterBy)
            // console.log('orders in store', orders);
            commit({ type: 'loadOrders', orders });
        },
        async removeOrder({ commit }, { orderId }) {
            // console.log(orderId);
            var order = await orderService.remove(orderId)
            commit({ type: 'removeOrder', order });
            return order
        },
        async addOrder({ commit }, { order }) {
            var savedOrder = orderService.save(order)
            commit({ type: 'addGig', savedOrder });
            return savedOrder;
        },
    }
}