const jwt = require('jsonwebtoken')
const User = require('../model/user.model')

const authMiddleware = async (req,res,next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
       return res.status(401).json({
            success:false,
            message:'No token, access denied'
        })

        
    }
    try {
        const token = authHeader.split(' ')[1]
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        req.user = await User.findById(decoded.id).select('-password')
        next()
    } catch (error) {
        console.error(error.message)
        res.status(401).json({
            success:false,
            message:'Token is not valid, Expired'
        })
    }
}

module.exports = authMiddleware