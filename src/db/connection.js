const mongoose=require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/students-api")
.then(()=>{
    console.log("Connection successful!");
}).catch((e)=>{
    console.log("No connection!");
})