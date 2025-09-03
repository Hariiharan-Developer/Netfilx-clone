const asyncHandler = require('express-async-handler')

//Register User:
const registerUser =asyncHandler(async (req,res)=>{

    res.status(200).json({message:'register user works'})
})

//Login User:
const loginUser =asyncHandler(async (req,res)=>{

    res.status(200).json({message:'login user works'})
})

//Get User :
const getUser =asyncHandler(async (req,res)=>{

    res.status(200).json({message:'get user works'})
})

module.exports = 
{
    loginUser,
    registerUser,
    getUser
}

