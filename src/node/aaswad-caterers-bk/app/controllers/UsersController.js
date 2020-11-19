const express = require('express')
const router = express.Router()
const { User } = require('../models/User.js')
const { authenticateUser } = require('../middlewares/authentication.js')

// localhost:3001/users/register
router.post('/register', function (req, res) {
    const body = req.body
    const user = new User(body)
    user.save()
        .then(function (user) {
            res.json(user)
        })
        .catch(function (err) {
            res.json(err)
        })
})



// localhost:3001/users/login
router.post('/login', function (req, res) {
    const body = req.body

    User.findByCredentials(body.email, body.password)
        .then(function (user) {
            console.log("user is found")
            // Goal : to set and get both username and the token , here only token is working 


            // localStorage.setItem("username",user.username)
            // my code here ,,,
            // res.json({ "username": username })
            //     .then(function () { console.log("username has been set") })
            //     .catch(function (err) { res.send(err) })
            // my code end ,,,
            // res.setHeader('username', user.username).send({})
            // const token = user.generateToken()
            // return { token, username: user.username }
            return user.generateToken()
        })
        .then(function (token) {
            // console.log("username:", data.username)
            console.log("token:", token)
            // console.log("data.username:", data.username)
            // data.token.then((myToken) => {
            //     console.log(myToken)
            //     console.log("x-auth has been set as header")
            //     return myToken
            // })
            //     .catch(err => { console.log(err) })
            res.setHeader('x-auth', token)
            res.send({ token })

            // localStorage.setItem("token",token)

        })
        .catch(function (err) {
            res.send(err)
        })
})


// localhost:3001/users/account
router.get('/account', authenticateUser, function (req, res) {
    const { user } = req
    console.log("user-data: ", user.userType)
    res.send({ username: user.username, email: user.email, userType: user.userType })
})

// localhost:3001/users/logout
router.delete('/logout', authenticateUser, function (req, res) {
    const { user, token } = req
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
        .then(function () {
            res.send({ notice: 'successfully logged out' })
        })
        .catch(function (err) {
            res.send(err)
        })
})

module.exports = {
    usersRouter: router
} 
