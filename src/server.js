const express= require("express")
const app=express()
require("../db/conn")
const hbs= require("hbs")
const router=require("../router/router")

app.use(router)
app.set('view engine', 'hbs');

app.listen(1322)

