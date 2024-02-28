const mongoose=require('mongoose')
const Expense_Track1=mongoose.Schema({
    UserName:{type:String,ref:"Data"},
    Data:{
        type:Map,
        of: [[{ type: mongoose.Schema.Types.Mixed }]]
    }
})
const Expense_Collection_Data1=mongoose.model("Expense_Collection_Data",Expense_Track1)
module.exports=Expense_Collection_Data1



/*
  const dataata=await TrackerTour.findOneAndUpdate({
            UserName:username
        },
        {$push:{Data:Expense_Data}},
        {new:true}
        )
*/