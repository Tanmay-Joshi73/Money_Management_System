const express=require('express')
const {username}=require('./Usercontroller.js')
const model=require('./../UserDB/data.js')
const bodyparser=require('body-parser')
const TrackerTour=require('../UserDB/data.js')
exports.Tracker=(req,res)=>{
    res.render('tracker')
}
exports.SavedData=async(req,res)=>{
        const Expense_Data=req.body
        const username=req.session.username
        console.log(username)
        try{
        const dataata=await TrackerTour.findOneAndUpdate({
            UserName:username
        },
        {$push:{Data:Expense_Data}},
        {new:true}
        )
         
         
    }
    catch(err){
        console.log(err)
    }

}