import {} from "dotenv/config"
import express from "express";
import cors from 'cors'
import db from "./db.js"
import user from "./models/useModel.js"
import bcrypt from "bcrypt"
import cookieParser from "cookie-parser";
import {generateToken,jwtAuthMiddleware} from "./jwt.js"

//global variables
const PORT = process.env.PORT || 3000
const app = express();


//middlewares
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())



app.post("/register",async(req,res) => {
    try{
        const userData = req.body;
        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password,salt)
        userData.password=hashedPassword

        const newUser = new user(userData);
        const response = await newUser.save();
        console.log(userData);
        res.status(200).json(response)
    }catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server error"})
    }
})

app.post("/login",async(req,res) => {
    try{
        const {userInput,password} = req.body;
       
        const isUser = await user.findOne({userInput})
        if(!isUser){
            return res.status(404).json({msg:"Invalid credentials"})
        }

        const isPassword = await bcrypt.compare(password,isUser.password);
        if(!isPassword){
            return res.status(404).json({msg:"Invalid credentials"})
        }

        //token generation
        const payload = {
            id:isUser.id,
            username:isUser.username
        }
        const token =  generateToken(payload)
        res.cookie('token',token)
        console.log("User logged in");

        res.status(200).json({msg:"Logged In",token:token})
    }catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server errror"})
    }
})


//profile route
app.get("/profile",jwtAuthMiddleware,(req,res) => {
    res.send("profile")
})


app.post("/logout",(req,res) => {
    res.cookie("token","")
    res.status(200).json({msg:"Logged Out"})
})

app.listen(PORT,() => {
    console.log(`Server is running on PORT ${PORT}`)
})