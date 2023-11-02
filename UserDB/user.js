const mongoose=require('mongoose')
const Schema=mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    Password:{
        type:String
    }
})

const Data=mongoose.model('Data',Schema)