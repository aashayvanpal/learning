 
const mongoose = require('mongoose')
 
 // db configuration - establishing connection to db 
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/Ticket-master-app', { useNewUrlParser: true })
    .then(() => {
        console.log('successfully connected to db...')
    })
    .catch((err) => {
        console.log('Did not connect to db', err)
    })

module.exports = mongoose