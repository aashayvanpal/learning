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
router.post('/add/items', itemController.create)
router.get('/add/items', itemController.list)
router.delete('/item/:id', itemController.destroy)





module.exports = router