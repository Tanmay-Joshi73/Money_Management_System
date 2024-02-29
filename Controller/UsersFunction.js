
const bcrypt = require('bcrypt')
const nodemailer=require('nodemailer')
        // Function To Decrypt Password
exports.decreypt=async(Pass)=>{
    try {
        const salt = await bcrypt.genSalt(10);


        const hash_Pass = await bcrypt.hash(Pass, salt);
        return hash_Pass
    }
    catch (err) {
        console.log(err)
    }
}

        // Function To Send Email To User
exports.SendMail=(Message,workEmail,Subject,req,res)=>{
    const transportar=nodemailer.createTransport({
        service:'gmail',
        secure:true,
        auth:{
            user: process.env.UserEmail,
            pass: process.env.UserPass
        }
    })
    
    const MailOptions={
        from:process.env.UserEmail ,
        to: workEmail,
        subject: `${Subject}`,
        text: `${Message}`
    }
    
    transportar.sendMail(MailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent: ' + info.response);
            // res.end('Email-sent:' + info.response)
        }
    })}

    exports.CheckSession=(req,res,next)=>{
        if(req.session.username==undefined){
            res.redirect('/LoginPage')
        }
        else{
            next()
        }
    }