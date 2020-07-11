const Customer = require('../models/customer.js')

// list
module.exports.list = (req, res) => {
    Customer.find()
        .then(customer => {
            res.json(customer)
        })
        .catch(err => {
            console.log(err)
        })
}

// create
module.exports.create = (req, res) => {
    const body = req.body
    const customer = new Customer(body)
    // const note = new Note(body)
    customer.save()
        .then((customer) => {
            res.json(customer)
        })
        .catch((err) => {
            res.json(err)
        })
}

// show
module.exports.show = (req, res) => {
    id = req.params.id
    Customer.findById(id)
        .then(customer => {
            if (customer) {
                // note will be either object or null value 
                // checks to see if the note is present in the db
                res.json(customer) //sends the note 

            } else { //send an empty object 
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

// destroy
module.exports.destroy = (req, res) => {
    const id = req.params.id
    Customer.findByIdAndDelete(id)
        .then(customer => {
            if (customer) {

                res.json(customer)
            } else {
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
    Customer.findByIdAndUpdate(id, body, { new: true,runValidators:true })
        .then( customer =>{
            if (customer){
                res.json(customer)
            }else{
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

