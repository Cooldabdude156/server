const mongoose=require("mongoose")

const signupSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true, 
        minlength:3,
        

    },

    phoneNumber:{
        type:Number,
        required:true,
        minlength:10,


    },
    emailID:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:5,

    },

})
const signup=new mongoose.modal('signup',signupSchema)
module.exports=signup
