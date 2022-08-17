const express = require('express')
const router = require.Router()
const orderController = require('./OrderController')

//Orders CRUD
router.post('/', orderController.createOrder)
router.get('/:id', orderController.getOrderbyId)
router.get('/:order_code', orderController.getOrderbyCode)
router.get('/:order_type', orderController.getOrderbyType)
router.get('/:order_status', orderController.getOrderbyStatus)
router.put('/:id', orderController.updateOrder)
router.delete('/:id', orderController.deleteOrder)

module.exports = router
