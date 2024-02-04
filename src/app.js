const express=require("express");
const app=express();
require("./db/connection"); // importing file connection.js
const port=process.env.PORT || 8000;
// const Student=require("./models/students");
const studentsRouter=require("./routers/student"); //-> All routes file here...

// const port=process.env.PORT || 8000;
// process.env.PORT provides a unique port when we put our code at server netlify,heroku,aws etc...

app.use(express.json());
app.use(studentsRouter);

// Creating new students... using Promises
// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user=new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     });
    // res.send("Hello from other side!");
// })

// Creating new students... using Async await
// app.post("/students",async(req,res)=>{
//     try{
//     const user=new Student(req.body);
//     const createUser=await user.save();
//     res.status(201).send(createUser);
//     }catch(e){res.status(400).send(e);}
// })

/* 
For post and put requests only...we need express.json() else we will get undefined for req.body
which shows data that we send through api (postmain) post method...

express.json() is an inbuilt method in express to recognize the incoming request object as a
json object. This method is called a middleware in our application using the code->
app.use(express.json());
*/

// Reading registered students->

// app.get("/",(req,res)=>{
//     res.send("Welcome to Home!");
// })

// app.get("/students",async(req,res)=>{
//     try{
//         const studentsData=await Student.find();
//         res.send(studentsData);
//     }catch(e){
//         res.send(e);
//     }
// })

// id->657c206c2bef6491265c4a4e (For finding single student with his id...)
// app.get("/students/:id",async(req,res)=>{
//     try{
//         const _id=req.params.id;
//         const studentsData=await Student.findById(_id);
//         if(!studentsData){
//             return res.status(404).send();
//         }
//         else{
//             res.send(studentsData);
//         }
//     }catch(e){
//         res.send(e);
//     }
// })

// Deleting registered students->(By id)
// app.delete("/students/:id",async(req,res)=>{
//     try{
//         const _id=req.params.id;
//         const deletedStudent=await Student.findByIdAndDelete(_id);
//         if(!_id){
//             return res.status(404).send();
//         }
//         res.send(deletedStudent);
//     }catch(e){
//         res.status(500).send(e);
//     }
// })

// Updating registered students->(By id) (PUT,PATCH)
//Patch just changes data but put method overwrites the whole previous data with new one...
// app.patch("/students/:id",async(req,res)=>{
//     try{
//         const _id=req.params.id;
//         const updatedStudent=await Student.findByIdAndUpdate(_id,req.body);
//         if(!_id){
//             return res.status(404).send();
//         }
//         res.send(updatedStudent);
//     }catch(e){
//         res.status(500).send(e);
//     }
// })

// This listen method should be at bottom->
app.listen(port,()=>{
    console.log(`Connection established at ${port} port!`);
})