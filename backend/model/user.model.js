const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required:[true , 'Please Fill Name Field']
    },
    email: {
        type: String,
        required:[true , 'Please Fill Email Field'],
        unique:true
    },
    password: {
        type: String,
        required:[true , 'Please Fill password Field']
    },
},{timestamps:true})

module.exports = mongoose.model('User' ,userSchema)
