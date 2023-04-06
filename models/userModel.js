const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    firstName:{type:String,default:''},
    lastName:{type:String,default:''},
    email:{type:String,default:''},
    phoneNumber:{type:String,default:''},
    education:{type:Array,default:[]},
    progLanguages:{type:Array,default:[]},
    dataBases:{type:Array,default:[]},
    tools:{type:Array,default:[]},
    naturalLanguages:{type:Array,default:[]},
    projects:{type:Array,default:[]},
    experience:{type:Array,default:[]},
},{
    timestamps:true
})

const userModel=mongoose.model('users',userSchema);
module.exports=userModel;