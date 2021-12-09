const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getOrders, getOrderById, addOrder, updateOrder, removeOrder } = require('./order.controller')
const router = express.Router()

// middleware that is specific to this router
router.use(requireAuth)

// router.get('/', getOrders)
router.get('/', log, getOrders)
router.get('/:id', getOrderById)
// router.post('/', requireAuth, addOrder)
router.post('/', addOrder)
// router.put('/:id', requireAuth, requireAdmin, updateOrder)
router.put('/:id', updateOrder)
router.delete('/:id', requireAuth, removeOrder)

module.exports = router