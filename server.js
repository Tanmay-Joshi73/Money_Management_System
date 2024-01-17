const express = require('express');
const fs = require('fs')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./Routes/route')
const HomePage = fs.readFileSync(`${__dirname}/index.html`, 'utf-8')
const LoginPage = fs.readFileSync(`${__dirname}/Authenticate.html`, 'utf-8')
const CreatePage1 = fs.readFileSync(`${__dirname}/Authenticate1.html`, 'utf-8')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const PORT = process.env.PORT || 8000
const app = express();
const Connect = require('./connect/connection')
app.use(bodyparser.urlencoded({ extended: true }));

// Serve static assets
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/Logo', express.static('Logo'));
app.use('/SampleImage', express.static('SampleImage'));
app.use('/Images', express.static('Images'))

app.get('/', (req, res) => {
    res.redirect('/home');
});
app.use('/', User)
///Connection String
const Start = async () => {
    try {
        await Connect();
        app.listen(PORT, '127.0.0.1', () => console.log('Listening To The Server http://localhost:8000/'))

    } catch (err) {
        console.log(err)
    }
}
Start()
