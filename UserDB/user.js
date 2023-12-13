const mongoose=require('mongoose')
const Schema=mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String,
        unique:true,
        required: true,
        match: /^\S+@\S+\.\S+$/
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