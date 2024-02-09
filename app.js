const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRouter = require("./controllers/userRouter")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://gowri090:gowri2510@cluster0.37wleuc.mongodb.net/BlogDB?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/user",userRouter)

app.listen(3004,()=>{
    console.log("Server is running...")
})