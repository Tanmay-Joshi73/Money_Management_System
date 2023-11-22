const express=require('express')
const nodemailer=require('nodemailer')
const bodyparser=require('body-parser')

const fs=require('fs')
const HomePage=fs.readFileSync(`${__dirname}/../index.html`,'utf-8')
const LoginPage=fs.readFileSync(`${__dirname}/../Authenticate.html`,'utf-8')
const CreatePage1=fs.readFileSync(`${__dirname}/../Authenticate1.html`,'utf-8')


exports.Home=async(req,res)=>{
    await res.end(HomePage)
}
exports.LoginPage=async(req,res)=>{
    await res.end(LoginPage)
}
exports.CreatePage1=async(req,res)=>{
    await res.end(CreatePage1)
}
exports.sendMail=async(req,res)=>{
const workEmail=await req.body.workemail
const transportar=nodemailer.createTransport({
    service:'gmail',
    secure:true,
    auth:{
        user: process.env.UserEmail,
        pass: process.env.UserPass
    }
})

const MailOptions={
    from: 'tanmayjoshi072@gmail.com',
    to: workEmail,
    subject: 'New Form Submission',
    text: `You have a new form submission from ${workEmail} we are glad that you visit our website,even our website will help you to managar your money.`
}

transportar.sendMail(MailOptions, (error, info) => {
    if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    } else {
        // console.log('Email sent: ' + info.response);
        res.end('Email-sent:' + info.response)
    }
});
}

