const express=require('express')
const mysql=require('mysql')
const app=express()

app.get("/this",function(req,res){
    res.send("this is ashish")
})

app.listen(3000,function(){
    console.log("app is running on ",3000)
})