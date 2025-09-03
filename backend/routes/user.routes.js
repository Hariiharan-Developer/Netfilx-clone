const express = require('express')
const { registerUser, loginUser, getUser } = require('../controller/user.controller')
const authMiddleware = require('../middleware/auth.middleware')
const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/get',authMiddleware,getUser)

module.exports = userRouter