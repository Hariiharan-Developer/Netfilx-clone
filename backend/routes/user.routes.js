const express = require('express')
const { registerUser, loginUser, getUser } = require('../controller/user.controller')
const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/get',getUser)

module.exports = userRouter