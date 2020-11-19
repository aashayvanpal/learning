const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    email: {
        type: String,
        email: true,
        unique: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value)
            },
            message: function () {
                return 'Invalid email format '
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128
    },
    userType: {
        type: String
    },
    tokens: [
        {
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now
            }

        }
    ]
})

// Own instance methods
userSchema.methods.generateToken = function () {
    const user = this
    const tokenData = {
        _id: user._id,
        username: user.username,
        createdAt: Number(new Date())
    }

    const token = jwt.sign(tokenData, 'jwt@123')
    user.tokens.push({ token })

    return user.save()
        .then(function (user) {
            // return Promise.resolve({ token: token, username: tokenData.username })
            return Promise.resolve(token)
        })
        .catch(function (err) {
            return Promise.reject(err)
        })
}


// pre hooks 
userSchema.pre('save', function (next) {
    const user = this
    if (user.isNew) {

        bcryptjs.genSalt(10)
            .then(function (salt) {
                bcryptjs.hash(user.password, salt)
                    .then(function (encryptedPassword) {
                        user.password = encryptedPassword
                        next()
                    })
            })
    } else {
        next()
    }
})


// Own static method
userSchema.statics.findByCredentials = function (email, password) {
    // This refers to user model as this is an instance method
    const User = this
    return User.findOne({ email })
        .then(function (user) {
            if (!user) {
                return Promise.reject('Invalid Email / Password')
            }

            return bcryptjs.compare(password, user.password)
                .then(function (result) {
                    if (result) {
                        return Promise.resolve(user)
                        // return new Promise(function(resolve,reject){
                        //     return resolve(user)
                        // })
                    }
                    else {
                        return Promise.reject('Invalid  Email / Password')
                    }
                })

        })
        .catch(function (err) {
            return Promise.reject(err)
            // return new Promise(function(resolve,reject){
            //     reject(err)
            // })
        })
}

userSchema.statics.findByToken = function (token) {
    const User = this
    let tokenData
    try {
        tokenData = jwt.verify(token, 'jwt@123')
    } catch (err) {
        return Promise.reject(err)
    }
    // console.log('User :', User)
    return User.findOne({
        _id: tokenData._id,
        'tokens.token': token
    })
}





const User = mongoose.model('User', userSchema)

module.exports = { User }