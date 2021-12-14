//front end
function saveOrder() {
    this.order = {
        status: "pending",
        seller: {
            _id: this.owner._id,
        },
        gig: {
            _id: this.gig._id,
            title: this.gig.title,
            price: this.gig.price,
            imgUrl: this.gig.imgUrl[0],
        },
    };
    this.$store.dispatch({ type: "addOrder", order: this.order });
}
//order store action
async function addOrder({ commit }, { order }) {
    var savedOrder = await orderService.save(order)
    commit({ type: 'addOrder', savedOrder });
    return savedOrder;
}
//back end
async function addOrder(req, res) {
    try {
        var order = req.body;
        const user = req.session.user
        if (user._id) {
            order.createdAt = Date.now(),
                order.buyer = {
                    _id: user._id,
                    fullname: user.fullname,
                    imgUrl: user.imgUrl,
                }
            const addedOrder = await OrderService.add(order)
            res.json(addedOrder)
        }
    } catch (err) {
        logger.error('Failed to add Order', err)
        res.status(500).send({ err: 'Failed to add Order' })
    }
}
//order store mutations
function addOrder(state, { savedOrder }) {
    state.orders.push(savedOrder);
}