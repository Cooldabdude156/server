const mongoose=require("mongoose")
const mongoURI="mongodb+srv://CDD156:Xano123@cluster0.u6iow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(
    mongoURI,
    {
        useNewUrlParser:true,
        useFindAndModify:false
    }

).then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log('no connection')
})
