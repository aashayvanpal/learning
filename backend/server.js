// const express = require('express')
// const cors = require('cors')
// const mongoose = require('mongoose')
// // require('dotenv').config({ path: 'ENV_FILENAME' });

// require('dotenv').config()

// const app = express.Router()
// const port = process.env.port || 3000

// console.log('i am in server')
// app.use(cors())
// app.use(express.json())

// const uri = process.env.ATLAS_URI
// mongoose.connect(uri, {
//     useNewUrlParser: true, useCreateIndex: true
// })
// console.log('trying to connect now ...')
// const connection = mongoose.connection
// connection.once('open', () => {
//     console.log("MongoDB database connection established succssfully")

// })

// const usersRouter = require('./routes/users')
// app.use('/users', usersRouter)


// app.listen(port, () => {
//     console.log(`Server is listening to port : ${port}`)
// })

// // app.post('/users/add', (req,res))

// module.exports=app



// const http = require('http');
// const handleRequest = (request, response) => {
//   console.log('Received request for URL: ' + request.url);
//   response.writeHead(200);
//   response.end('Hello World!');
// };

// const www = http.createServer(handleRequest);
// www.listen(3000);


//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/aaswadcaterers-app';
mongoose.connect(mongoDB, { useUnifiedTopology: true,useNewUrlParser:true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log('server ended this build')