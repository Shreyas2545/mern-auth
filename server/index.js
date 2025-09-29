const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./model/user.model')
const app =express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/user");

app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running!!!");
})