import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";
import express, { json } from "express";
import router from './routes/users.routes.js'
import router2 from './routes/tasks.route.js'


mongoose.set('strictQuery', true);
const app = express()
app.use(json())
app.use(router)
app.use(router2)
const startApp = async ( ) => {
    await mongoose.connect(process.env.MONGO__SERVER)
    app.listen(process.env.PORT, () => {
        console.log(`App listen at http:localhost:${process.env.PORT}`);
    
})
}
startApp()