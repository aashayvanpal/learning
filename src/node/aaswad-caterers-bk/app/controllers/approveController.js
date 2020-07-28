// const ApproveItem = require('../models/approveItem.js')
const Order = require('../models/order.js')


// for approveItem
module.exports.createApprove = (req, res) => {
    const body = req.body
    console.log('inside create approve module 1')

    const order = new Order(body)
    // const note = new Note(body)
    order.save()
        .then((order) => {
            res.json(order)
        })
        .catch((err) => {
            console.log('inside create approve module 2')
            res.json(err)
        })
}


// list
module.exports.list = (req, res) => {
    Order.find()
        .then(order => {
            res.json(order)
        })
        .catch(err => {
            console.log(err)
        })
}


// destroy
module.exports.destroy = (req, res) => {
    const id = req.params.id
    Order.findByIdAndDelete(id)
        .then(order => {
            if (order) {

                res.json(order)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

// show
module.exports.show = (req, res) => {
    id = req.params.id
    Order.findById(id)
        .then(order => {
            if (order) {
                // note will be either object or null value 
                // checks to see if the note is present in the db
                res.json(order) //sends the note 

            } else { //send an empty object 
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}


// update 
module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Order.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then(order => {
            if (order) {
                res.json(order)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}