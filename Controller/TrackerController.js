const express = require('express')
const { username } = require('./Usercontroller.js')
const model = require('./../UserDB/data.js')
const bodyparser = require('body-parser')
const TrackerTour = require('../UserDB/data.js')
exports.Tracker = (req, res) => {
    res.render('tracker')
}
exports.SavedData = async (req, res) => {
    const Data = new Date()
    const formattedDate = Data.toISOString().split('T')[0]; // Extracting YYYY-MM-DD
    const username = req.session.username
    let Expense_Data = req.body
    if (!Array.isArray(Expense_Data)) {
        // If it's not an array, convert it to an array with a single element
        Expense_Data = [Expense_Data];
    }

    const data = await TrackerTour.findOneAndUpdate(
        { UserName: username },
        { $addToSet: { [`Data.${formattedDate}`]: { $each: Expense_Data } } },
        { 
            new: true,
            upsert:true,
            projection: { Username: 1, Data: 1, _id: 0 } // Projection to include only Username and Data fields
        }
    );

    // Handle the response
    
};

exports.fetch=async(req,res)=>{
        if(req.session.username===undefined){
            res.redirect('/LoginPage')
        }
        else{
            const user=req.session.username
           
            const userData=await TrackerTour.findOne({UserName:user})
            res.render('Display')
        }
}







