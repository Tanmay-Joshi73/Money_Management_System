const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcrypt')

const Schema=new mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String,
        unique:true,
        required: true,
        lowercase:true,
        validate:[validator.isEmail,'Hey Please Provide The Email']
    },
    Password:{
        type:String,
        required: true,
        minlength: 6
    }
    ,
    CreatedAt:{
        type:Date,
        default:Date.now()
    }
})

const Data=mongoose.model('Data',Schema)


module.exports=Data
