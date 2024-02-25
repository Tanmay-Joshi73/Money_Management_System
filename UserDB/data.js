const mongoose=require('mongoose')
const Expense_Track=mongoose.Schema({
    UserName:{type:String,ref:"Data"},
    Data:{
        type:Array
    }
})
const Expense_Collection_Data=mongoose.model("Expense_Collection_Data",Expense_Track)
module.exports=Expense_Collection_Data