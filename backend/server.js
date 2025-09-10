const express = require('express')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error.handler')
const userRouter = require('./routes/user.routes')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')

//Accepting to read body fields:
app.use(express.json())
app.use(express.urlencoded({extends:true}))
//CORS :
app.use(cors({origin: 'http://localhost:5173'}))

//User API call:
app.use('/api/user',userRouter)


//Database callback:
connectDB()




app.listen(process.env.PORT,()=>{
    console.log(`server listening on the port: http://localhost:${process.env.PORT}`)
})

app.use(errorHandler)