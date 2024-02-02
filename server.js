const express = require('express');
const fs=require('fs')
const path=require('path')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const User=require('./Routes/route')
const HomePage=fs.readFileSync(`${__dirname}/index.html`,'utf-8')
const LoginPage=fs.readFileSync(`${__dirname}/Authenticate.html`,'utf-8')
const CreatePage1=fs.readFileSync(`${__dirname}/Authenticate1.html`,'utf-8')
const dotenv=require('dotenv')
dotenv.config({path:'./.env'})
const PORT=process.env.PORT||8000
const app = express();
const Connect=require('./connect/connection')
app.use(bodyparser.urlencoded({ extended: true }));

// Serve static assets
app.set("view engine","ejs")
app.set("views",path.resolve('./views'))
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {   
    res.render('tracker')
});
app.use('/',User)
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
