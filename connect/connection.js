const mongoose = require('mongoose')
const express = require('express')
const DBURL = process.env.DB
const PORT = process.env.PORT
// const app=require('./../server')
const Connect = () => {
    return mongoose.connect(DBURL, {
        useNewUrlParser: true, // Use new URL parser
        useUnifiedTopology: true, // Use new server discovery and monitoring engine
    }).then(()=>console.log('connected to the database'))
    // console.log('connected to the database')
}
module.exports = Connect