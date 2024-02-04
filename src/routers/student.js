const express=require("express");
//  Keeping all routes here ->
const router=new express.Router();
const Student=require("../models/students");
// Create a new router->
// const router=new express.Router();

// We need to define the router->
router.get("/pt",(req,res)=>{
    res.send("Welcome to P.T. Home!");
})

// We need to register our router->
// app.use(router);

router.post("/students",async(req,res)=>{
    try{
    const user=new Student(req.body);
    const createUser=await user.save();
    res.status(201).send(createUser);
    }catch(e){res.status(400).send(e);}
})

router.get("/",(req,res)=>{
    res.send("Welcome to Home!");
})

router.get("/students",async(req,res)=>{
    try{
        const studentsData=await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

router.delete("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const deletedStudent=await Student.findByIdAndDelete(_id);
        if(!_id){
            return res.status(404).send();
        }
        res.send(deletedStudent);
    }catch(e){
        res.status(500).send(e);
    }
})

router.patch("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatedStudent=await Student.findByIdAndUpdate(_id,req.body);
        if(!_id){
            return res.status(404).send();
        }
        res.send(updatedStudent);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports=router;