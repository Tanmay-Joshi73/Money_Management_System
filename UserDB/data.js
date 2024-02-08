const mongoose=require('mongoose')
const ExpenseSchema=mongoose.Schema({
    UserName:{
        type:String,
        required:true,
        unique:true
    },
    Data:{
        type:Array,
        required:true
    }
     
})

const ExpenseCollection=mongoose.model('ExpenseCollection',ExpenseSchema)
module.exports=ExpenseCollection

    


