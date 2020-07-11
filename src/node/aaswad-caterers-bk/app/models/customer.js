const mongoose = require('mongoose')

const Schema = mongoose.Schema
// Create a categories Schema - with fields like name of type string and required true

const customerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
})


//Create a model called as Category
const Customer = mongoose.model('Customer',customerSchema) 

module.exports = Customer