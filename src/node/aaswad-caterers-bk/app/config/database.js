
const mongoose = require('mongoose')

// db configuration - establishing connection to db 
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/AaswadCaterers-app',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('successfully connected to db...')
    })
    .catch((err) => {
        console.log('Did not connect to db', err)
    })

module.exports = mongoose