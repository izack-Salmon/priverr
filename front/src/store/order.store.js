// import { addOrder, removeOrder } from "../../../backend/api/order/order.controller"
import { orderService } from "../services/order.service"

export const orderStore = {
    state: {
        orders: '',
    },
    getters: {
        orders(state) {
            // console.log(state.orders);
            return state.orders
        },
    },
    mutations: {
        loadOrders(state, { orders }) {
            state.orders = orders
            console.log(state.orders);
        },
        removeOrder(state, { orderId }) {
            const idx = state.orders.findIndex((currOrder) => currOrder._id === orderId);
            state.orders.splice(idx, 1);
        },
        addOrder(state, { savedOrder }) {
            if (!state.orders) {
                state.orders = []
            }
            state.orders.push(savedOrder);
        },
    },
    actions: {
        async loadOrders({ commit, state }) {
            var orders = await orderService.query(state.filterBy)
            console.log('orders in store', orders);
            commit({ type: 'loadOrders', orders });
        },
        async removeOrder({ commit }, { orderId }) {
            // console.log(orderId);
            var order = await orderService.remove(orderId)
            commit({ type: 'removeOrder', order });
            return order
        },
        async addOrder({ commit }, { order }) {
            console.log(order);
            var savedOrder = await orderService.save(order)
                // console.log('this 2');
            commit({ type: 'addOrder', savedOrder });
            return savedOrder;
        },
    }
}