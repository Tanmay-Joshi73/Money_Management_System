const express = require('express')
const { username } = require('./Usercontroller.js')
const model = require('./../UserDB/data.js')
const bodyparser = require('body-parser')
const TrackerTour = require('../UserDB/data.js')
exports.Tracker = (req, res) => {
    res.render('tracker')
}
exports.SavedData = async (req, res) => {
    const Time = new Date()
    const isoDate = Time.toLocaleDateString(); // Get the date in local timezone
    const formattedDate = isoDate.split('T')[0]; // Extracting YYYY-MM-DD
    console.log(formattedDate);
    const username = req.session.username
    let Expense_Data = req.body
    if (!Array.isArray(Expense_Data)) {
        // If it's not an array, convert it to an array with a single element
        Expense_Data = [Expense_Data];
    }
    const existingData = await TrackerTour.findOne({ UserName: username });

        if(!existingData.Data){
            let data = await TrackerTour.findOneAndUpdate(
                { UserName: username },
                { $addToSet: { [`Data.${formattedDate}`]: { $each: Expense_Data } } },
                {
                    new: true,
                    upsert: true,
                    projection: { Username: 1, Data: 1, _id: 0 } // Projection to include only Username and Data fields
                }
            );
        }
        
        else{
                let data=await TrackerTour.findOne({UserName:username})
                const Current_Date_Data=data.Data.get(formattedDate)
                console.log(Current_Date_Data)
                    if(!Current_Date_Data){
                        data=await await TrackerTour.findOneAndUpdate(
                            { UserName: username },
                            { $addToSet: { [`Data.${formattedDate}`]: { $each: Expense_Data } } },
                            {
                                new: true,
                                upsert: true,
                                projection: { Username: 1, Data: 1, _id: 0 } // Projection to include only Username and Data fields
                            }
                        );
                    }
                    else{
                        console.log('Current Data is here')
                    }


           } 
          }
    
 
        // Data for the specified date does not exist, proceed to add the new data
       






exports.fetch = async (req, res) => {
    if (req.session.username === undefined) {
        res.redirect('/LoginPage')
    }
    else {
        const user = req.session.username
        console.log(user)
        const userData = await TrackerTour.findOne({ UserName: user })
        const jsonObj=JSON.stringify({...userData})
        const JSONdata={
            Data:userData.Data
        }

        // console.log(JSONdata)
        res.render('Display', { userData: JSON.stringify(JSONdata) });
    }
}







