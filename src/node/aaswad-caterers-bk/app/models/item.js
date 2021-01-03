const mongoose = require('mongoose')

const Schema = mongoose.Schema
// Create a categories Schema - with fields like name of type string and required true

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    category: {
        type: Array,
        required: true
    },
    measured: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
    },
    display: {
        type: Boolean,
    },
    ingredients: {
        type: String
    },
    recipie: {
        type: String
    }
})


//Create a model called as Category
const Item = mongoose.model('Item', itemSchema)

module.exports = Item