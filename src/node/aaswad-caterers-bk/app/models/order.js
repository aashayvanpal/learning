const mongoose = require('mongoose')

const Schema = mongoose.Schema
// Create a Order Schema - with fields 

const orderSchema = new Schema({
    items: {
        type: Array,
        required: true
    },

    customer: {
        fullName: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        email: {
            type: String
        },
        address: {
            type: String,
            required: true
        },
        qurries: {
            type: String
        },
        eventName: {
            type: String
        },
        eventDate: {
            type: String,
            required: true
        },
        eventTime: {
            type: String,
            required: true
        },
        homeDelivery: {
            type: Boolean,
            required: true
        },
        service: {
            type: Boolean,
            required: true
        }
    },

    status: {
        type: String,
        required: true
    }
})


//Create a model called as Order
const Order = mongoose.model('Order', orderSchema)

module.exports = Order