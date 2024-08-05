const express=require("express")
const userModel=require('../models/userModel.js')
const app=express.Router()
const bcrypt =require('bcrypt')

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