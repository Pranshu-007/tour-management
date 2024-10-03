import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import tourroute from './routes/tours.js'
import authroute from './routes/auth.js'

dotenv.config()
const app = express()

var corsOptions = {
    origin: true,
    credentials:true,
  };


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Successfully connected to DATABASE");
    } catch (error) {
        console.log("Failed to connect to DATABASE",error);
    }
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/tour',tourroute)
app.use('/auth',authroute)

const PORT = 4000

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Connected to the server");
    })
})
    
