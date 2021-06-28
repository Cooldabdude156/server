var express= require("express")
var app= express.Router()
var signupModal=require("../modal/signup")
var adminModal=require("../modal/admin")

app.get("/",function(request, response){
    response.send("My name is Saksham Gupta")
})
app.get("/login",function(request, response){
    response.send("I am a login page")
})

app.get("/signup",function(request, response){
    response.send("Sign Up!")})

app.get("/admin",function(request, response){
    response.send("Admin powers!")})

    


module.exports=app