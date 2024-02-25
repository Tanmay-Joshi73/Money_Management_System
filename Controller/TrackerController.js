const express=require('express')
const model=require('./../UserDB/data.js')
const bodyparser=require('body-parser')

const TrackerTour=require('../UserDB/data.js')
exports.Fetch=(req,res)=>{
    
}
exports.SavedData=async(req,res)=>{
        
    const data=req.body
    await TrackerTour.create({
        Data:data
    })
        

}