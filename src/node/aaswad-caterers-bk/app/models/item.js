const mongoose = require('mongoose')

const Schema = mongoose.Schema
// Create a categories Schema - with fields like name of type string and required true

const itemSchema = new Schema({
    name:{
        type:String,
        required:true
    }
})


//Create a model called as Category
const Item = mongoose.model('Item',itemSchema) 

module.exports = Item