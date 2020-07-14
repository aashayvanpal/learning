const express = require('express')
const router = express.Router()

const itemController = require('../controllers/itemController.js')


// const customerController = require('../app/controllers/customerController.js')
// // for customers 
// router.get('/customers', customerController.list)
// router.get('/customers/:id', customerController.show)
// router.post('/customers', customerController.create)
// router.put('/customers/:id', customerController.update)
// router.delete('/customers/:id', customerController.destroy)

// for Items
router.post('/items/add', itemController.create)
router.get('/items', itemController.list)
router.get('/items/show/:id', itemController.show)
router.put('/items/edit/:id', itemController.update)
router.get('/items/edit/:id', itemController.show)

router.delete('/items/:id', itemController.destroy)





module.exports = router