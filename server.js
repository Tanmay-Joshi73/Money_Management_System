const express = require('express');
const fs=require('fs')
const mongoose=require('mongoose')
const User=require('./Routes/route')
const HomePage=fs.readFileSync(`${__dirname}/index.html`,'utf-8')
const dotenv=require('dotenv')
dotenv.config({path:'./.env'})
const PORT=process.env.PORT
const app = express();
const Connect=require('./connect/connection')

// Serve static assets
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/Logo', express.static('Logo'));
app.use('/SampleImage', express.static('SampleImage'));
app.use('/Images',express.static('Images'))

    app.get('/Home',(req,res)=>{
        res.send(HomePage)
    })

    ///Connection String
const Start=async()=>{
    try{
    await Connect()
    app.listen(PORT,'127.0.0.1',()=>console.log('Listening To The Server'))

}   catch(err){
    console.log(err)
}
}
Start()
