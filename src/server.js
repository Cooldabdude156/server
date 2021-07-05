const express= require("express")
const app=express()
require("../db/conn")
const hbs= require("hbs")
const path = require("path");
const router=require("../router/router")
const template_path=path.join(__dirname,"../templates/views")
app.set("view engine","hbs");
app.set("views",template_path)
app.get("/",function(request, response){
    response.render("index")
})
app.get("/login",function(request, response){
    response.send("I am a login page")
})

app.get("/signup",function(request, response){
    response.send("Sign Up!")})

app.get("/admin",function(request, response){
    response.send("Admin powers!")})
app.post("/login",function(request, response){
    response.send("I am a login page")
})

app.post("/signup",function(request, response){
    response.send("Sign Up!")})

app.post("/admin",function(request, response){
    response.send("Admin powers!")})

app.use(router)
app.set('view engine', 'hbs');

app.listen(1322)

