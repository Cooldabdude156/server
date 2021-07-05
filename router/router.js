var express= require("express")
var router= new express.Router()
var signupModal=require("../modal/signup")
var adminModal=require("../modal/admin")

router.get("/",function(request, response){
    response.send("My name is Saksham Gupta")
})
router.get("/login",function(request, response){
    response.send("I am a login page")
})

router.get("/signup",function(request, response){
    response.send("Sign Up!")})

router.get("/admin",function(request, response){
    response.send("Admin powers!")})

    


module.exports=router
