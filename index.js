const express=require("express");
const mongoose=require("mongoose");
const router=require("./router")
const cors=require("cors")
const app=express();
app.use(express.json());
app.use(cors())
mongoose.connect("mongodb+srv://aqibnawab:aqibnawab786@todoapp.mstk7uq.mongodb.net/ToDoApp?retryWrites=true&w=majority").then(()=>{
    console.log("Connected")
}).catch((e)=>{
    console.log("not Connected")
})
app.use(router)


app.listen(3000,()=>{
    console.log("server is listening on port 3000...")
})