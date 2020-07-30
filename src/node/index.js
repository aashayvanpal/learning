const express = require('express')
const mongoose = require('./aaswad-caterers-bk/app/config/database.js')
const app = express()
const port = process.env.PORT || 3001
const router = require('./aaswad-caterers-bk/app/config/routes.js')



app.use(express.json())


app.get('/', (req, res) => {
    res.send('Welcome to the Aaswad Caterers App !')
})

app.use('/', router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./build'))
}

app.listen(port, () => {
    console.log('listening to port :', port)
})