const mongoose=require('mongoose');
//const { default: ErrorList } = require('antd/lib/form/ErrorList');

const URL='mongodb+srv://Dmitry:0k6jwoplHeoNJ1fy@cluster0.zdaq5.mongodb.net/resumebuilder';

mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});

const connection=mongoose.connection;
connection.on('connected',()=>{
    console.log("Mongo DB is connected!")
})
connection.on("error",(error)=>{
    console.log(error)
}) 