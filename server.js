require('dotenv').config();



const express=require("express");
const bodyParser=require('body-parser');
const path=require('path')
const cors=require('cors');
const pdf=require('html-pdf');
const pdfTemplate=require('./documents')
const pool=require('./database/db');
const dbConnect=require('./dbConnect');
const userRoute=require('./routes/useRoute.js')
//const User=require('./models/userModel')



const options = {
	height: "42cm",
	width: "29.7cm",
	timeout: "6000",
};

const app=express();
app.use(express.json());
app.use('/api/user/', userRoute)
//  app.use(cors());
//  app.use(bodyParser.urlencoded({extended:true}));
//  app.use(bodyParser.json());


//  app.use(express.static(path.join(__dirname,'/public'))); 

//  app.get("*", (req, res) => {
//  	res.sendFile(path.join(__dirname, "/public/index.html"));
//  })


//LOGIN

app.post('/login',async(req,res)=>{
    try{
      const result=await User.findOne({
          username:req.body.username,
          password:req.body.password, 

      });
      if(result.length){
          res.send('Login successfull');
      }
    }
    catch(error){
        res.status(400).json(error);
    }
});


//REGISTRATION


app.post('/login',async(req,res)=>{
    try{
      const newuser=new User(req.body);
      await newuser.save();
      res.send('Registration successfull')
    }
    catch(error){
        res.status(400).json(error);
    }
});


//get all results
app.get('/result', async(req,res)=>{
    try{
      const allDesc= await pool.query('SELECT * FROM buildresume');    
      res.json(allDesc.rows)
    }catch(err){
      console.error(err.message)
    }
})

//getting the result with specific id
app.get('/result/:id', async(req,res)=>{
    try{
        const {id}=req.params;
      const oneDesc= await pool.query('SELECT * FROM buildresume WHERE buildresume_id=$1',[id]);
      res.json(oneDesc.rows[0])
    }catch(err){
      console.error(err.message)
    }
})


//creating the result
// app.post('/result',async(req,res)=>{
//     try{
//     const {description}=req.body;
//     const newDesc=await pool.query(
//         "INSERT INTO buildresume(description) VALUES($1) RETURNING *",
//         [description]
//     );
//     res.json(newDesc.rows[0])
//     }catch(err){
//         console.error(err.message) 
//     }
// });

//updating  the result

// app.put('/result/:id', async(req,res)=>{
//     try{
//         const {id}=req.params;
//         const {description}=req.body;
//         const updatedDesc= await pool.query('UPDATE buildresume SET description=$1 WHERE buildresume_id=$2',[description,id]);
//       res.json('this is updated!')
//     }catch(err){
//       console.error(err.message)
//     }
// })

//deleting the result

app.delete('/result/:id', async(req,res)=>{
    try{
        const {id}=req.params;
        const deleteDesc= await pool.query('DELETE FROM buildresume  WHERE buildresume_id=$1',[id]);
      res.json('this descripton is deleted!')
    }catch(err){
      console.error(err.message)
    }
})

// app.post("/create-pdf", (req, res) => {
// 	pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
// 		if (err) {
// 			console.log(err);
// 			res.send(Promise.reject());
// 		} else res.send(Promise.resolve());
// 	});
// });

// GET route -> send generated PDF to client...
// app.get("/fetch-pdf", (req, res) => {
// 	const file = path.join(__dirname, `${__dirname}/Resume.pdf`);
// 	console.log(file);
// 	console.log("show");
// 	res.download(file);
// });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));