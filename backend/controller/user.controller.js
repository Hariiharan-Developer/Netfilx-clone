const asyncHandler = require('express-async-handler')
const User = require('../model/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//JWT token generation:
const genJWT =(id)=>{
    return jwt.sign({id},process.env.SECRET_KEY,{expiresIn:'7d'})
}


//Register User:
const registerUser =asyncHandler(async (req,res)=>{
    const {name,email,password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error("please fill all the fields");
        
    }
    //bcrypt:

    const salt = await bcrypt.genSalt(10)
    const hashedPasssword = await bcrypt.hash(password,salt)

    const user = await User.create({name,email,password:hashedPasssword})

    res.status(200).json({
        message:'register user works',
        user,
        token:genJWT(user.id)
    })
     console.log(user)
})

//Login User:
const loginUser =asyncHandler(async (req,res)=>{

    const {email,password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error("email & password Required");    
    }
    
    const user = await User.findOne({email})
    if(!user){
        res.status(400)
        throw new Error("invalid email");
        
    }
    //bcrypt:
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        res.status(400)
        throw new Error('invalid password')
    }
    


    res.status(200).json({
        message:'login user works',
        id:user.id,
        name:user.name,
        email:user.email,
        token:genJWT(user._id)
        })
})

//Get User :
const getUser =asyncHandler(async (req,res)=>{
   const user = req.user
    if(!user){
        res.status(401)
        throw new Error(" user not authorized");
        
    }

    res.status(200).json({
        message:'get user works',
        data:user
    })
})


module.exports = 
{
    loginUser,
    registerUser,
    getUser
}

