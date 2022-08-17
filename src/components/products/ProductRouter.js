const express = require('express')
const router = require.Router()
const productController = require('./ProductController')

//Products CRUD
router.post('/', productController.createProduct)
router.get('/:id', productController.getProductbyId)
router.get('/:product_code', productController.getProductbyCode)
router.get('/:product_name', productController.getProductbyName)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router

