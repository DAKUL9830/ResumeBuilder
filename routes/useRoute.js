const express=require("express")
const userModel=require('../models/userModel.js')
const app=express.Router()
const bcrypt =require('bcrypt')


//LOGIN

// app.post('/login',async(req,res)=>{
//     try{

//       const result=await userModel.findOne({
//           username:req.body.username,
//           password:req.body.password

//       });
//       console.log(result)
//       if(result){
//           res.send(result);
//       }
//       else{
//         res.status(400).json('Login failed');

//       }
//     }
//     catch(error){
//         res.status(400).json(error);
//     }
// });


// //REGISTRATION


// app.post('/register',async(req,res)=>{
//     try{
//            //hash password 
//           //  const salt=await bcrypt.genSaltSync(10);
//           //  const hashedPass=await bcrypt.hash(req.body.password,salt);
//           // const username = req.body.Username;
//           // const password = req.body.Password;
//       const newuser=new userModel(
//         // username,
//         // password    
//           req.body
//       );
    
//       await newuser.save();
    
//       res.send("Registration successfull")
//       //res.status(200).json(user);
//     }
//     catch(error){
//         res.status(400).json(error);
//     }

  
// });
// //UPDATE
// app.post('/update',async(req,res)=>{
//       try{
//         await userModel.findOneAndUpdate({id : req.body.id}, req.body)
//         const user=await userModel.findOne({id : req.body.id})
//         res.send(user);
//       }catch(error){
//         res.status(400).json(error)
//       }

// //       try{
       
// //    const user=new userModel(
     
// //     {_id : req.body._id}, req.body
// //    );
 
// //    await user.save();
 
// //    res.send(user)
   
// //  }
// //  catch(error){
// //      res.status(400).json(error);
// //  }

//  })

// // app.post("/update", async (req, res) => {
// //   try {
// //     const updatedUser = await userModel.findOneAndUpdate(
// //       { _id: req.body._id },
// //       req.body,
// //       { new: true }
// //     );
// //     res.status(200).json(updatedUser);
// //     //res.send(updatedUser);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // });




// Registration
app.post('/register', async (req, res) => {
  try {
      const hashedPass = await bcrypt.hash(req.body.password, 10);
      const newUser = new userModel({
          username: req.body.username,
          password: hashedPass,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          education: req.body.education,
          progLanguages: req.body.progLanguages,
          dataBases: req.body.dataBases,
          tools: req.body.tools,
          naturalLanguages: req.body.naturalLanguages,
          projects: req.body.projects,
          experience: req.body.experience,
      });

      const savedUser = await newUser.save();
      const userObj = {
          id: savedUser._id,
          username: savedUser.username,
          firstName: savedUser.firstName,
          lastName: savedUser.lastName,
          email: savedUser.email,
          phoneNumber: savedUser.phoneNumber,
          education: savedUser.education,
          progLanguages: savedUser.progLanguages,
          dataBases: savedUser.dataBases,
          tools: savedUser.tools,
          naturalLanguages: savedUser.naturalLanguages,
          projects: savedUser.projects,
          experience: savedUser.experience,
      };
      res.status(200).send(userObj);
  } catch (error) {
      res.status(400).json(error.message);
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
      const user = await userModel.findOne({ username: req.body.username });
      if (user && await bcrypt.compare(req.body.password, user.password)) {
          const userObj = {
              id: user._id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              phoneNumber: user.phoneNumber,
              education: user.education,
              progLanguages: user.progLanguages,
              dataBases: user.dataBases,
              tools: user.tools,
              naturalLanguages: user.naturalLanguages,
              projects: user.projects,
              experience: user.experience,
          };
          res.status(200).send(userObj);
      } else {
          res.status(400).json('Login failed');
      }
  } catch (error) {
      res.status(400).json(error.message);
  }
});

// Update
app.post('/update', async (req, res) => {
  try {
      const updatedUser = await userModel.findOneAndUpdate(
          { _id: req.body.id },
          req.body,
          { new: true }
      );
      const userObj = {
          id: updatedUser._id,
          username: updatedUser.username,
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          email: updatedUser.email,
          phoneNumber: updatedUser.phoneNumber,
          education: updatedUser.education,
          progLanguages: updatedUser.progLanguages,
          dataBases: updatedUser.dataBases,
          tools: updatedUser.tools,
          naturalLanguages: updatedUser.naturalLanguages,
          projects: updatedUser.projects,
          experience: updatedUser.experience,
      };
      res.status(200).send(userObj);
  } catch (error) {
      res.status(400).json(error.message);
  }
});

module.exports=app;