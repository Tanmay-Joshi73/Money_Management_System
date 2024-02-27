const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcrypt')

const Schema=new mongoose.Schema({
    Name:{
        type:String,
        // unique:true,
        required:true,
    },
    Email:{
        type:String,
        // unique:true,
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
Schema.index({Name:1},{unique:true})

const Data=mongoose.model('Data',Schema)


module.exports=Data
