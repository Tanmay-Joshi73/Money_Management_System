const express=require('express')
const nodemailer=require('nodemailer')
const bodyparser=require('body-parser')
let ClientEmail;
let ClintName;
let ClientPassword;
let ClientUserName;
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
     ClientEmail=req.body.UserEmail
     
    
}
exports.ProfiePage = async (req, res) => {
    try {
     
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
          user: process.env.UserEmail,
          pass: process.env.UserPass
        }
      });
  
    
      const clientName = req.body.fullName;
      const clientUserName = req.body.Username;
      const clientPassword = req.body.password;
      const recipientEmail = ClientEmail; // Replace with the actual recipient email
  
      // Your logic for processing the profile page data
  
      // Sending an email
      const mailOptions = {
        from: 'tanmayjoshi072@gmail.com',
        to: recipientEmail,
        subject: 'Thanks For Joining US ,Keep Helping Us Like This',
        text: `
          Dear Recipient,
  
          The profile page has been Create for the user:
          - Name: ${clientName}
          - Username: ${clientUserName}
          - Password: ${clientPassword}
  
          Thank you.
        `
      };
  
      // Call the function to send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            // console.log('Email sent: ' + info.response);
            res.end('Welcome To The Home Page My Boi')
        }
    })
    }catch(err){
        console.log(err)
    }}
  

 
  




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
    subject: 'Thanks For Joining , Keep Supporting Us',
    text: `
    Title:  Money Manager: Empowering Your Financial Journey
    
    Introduction:
    In today's dynamic world, effective money management is essential for personal well-being. Introducing  Money Manager – a powerful tool designed to revolutionize how individuals handle their finances. Discover a seamless blend of simplicity and sophistication that puts you in control of your financial destiny.
    
    Contribute:
    1. Personalized Financial Solutions:
    Embark on your journey by customizing your Money Manager experience. Share your insights and preferences, contributing to the creation of personalized financial solutions that cater to individual needs.
    
    2. User Experience Enhancement:
    Participate in refining the user interface and overall user experience. Contribute ideas and solutions that make  Money Manager an intuitive and user-friendly platform for everyone, regardless of their financial expertise.
    
    3. Community Feedback:
    Share your thoughts on the platform's functionalities. As a user, your input is invaluable in shaping the Money Manager to be the go-to financial tool for people from all walks of life..`
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

