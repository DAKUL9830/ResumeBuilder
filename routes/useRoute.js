const express=require("express")
const userModel=require('../models/userModel.js')
const app=express.Router()
const bcrypt =require('bcrypt')


//LOGIN

app.post('/login',async(req,res)=>{
    try{

      const result=await userModel.findOne({
          username:req.body.username,
          password:req.body.password

      });
      console.log(result)
      if(result){
          res.send(result);
      }
      else{
        res.status(400).json('Login failed');

      }
    }
    catch(error){
        res.status(400).json(error);
    }
});


//REGISTRATION


app.post('/register',async(req,res)=>{
    try{
           //hash password 
          //  const salt=await bcrypt.genSaltSync(10);
          //  const hashedPass=await bcrypt.hash(req.body.password,salt);
          // const username = req.body.Username;
          // const password = req.body.Password;
      const newuser=new userModel(
        // username,
        // password
          req.body
      );
    
      await newuser.save();
    
      res.send("Registration successfull")
      //res.status(200).json(user);
    }
    catch(error){
        res.status(400).json(error);
    }

  
});
//UPDATE
app.post('/update',async(req,res)=>{
      try{
        await userModel.findOneAndUpdate({id : req.body.id}, req.body)
        const user=await userModel.findOne({id : req.body.id})
        res.send(user);
      }catch(error){
        res.status(400).json(error)
      }

//       try{
       
//    const user=new userModel(
     
//     {_id : req.body._id}, req.body
//    );
 
//    await user.save();
 
//    res.send(user)
   
//  }
//  catch(error){
//      res.status(400).json(error);
//  }

 })

// app.post("/update", async (req, res) => {
//   try {
//     const updatedUser = await userModel.findOneAndUpdate(
//       { _id: req.body._id },
//       req.body,
//       { new: true }
//     );
//     res.status(200).json(updatedUser);
//     //res.send(updatedUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

module.exports=app;