const trackerTour=require('./../UserDB/data')
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


    // exports.TodayTransaction = async (req, res, next) => {
    //     const Time = new Date()
    //     const isoDate = Time.toLocaleDateString(); // Get the date in local timezone
    //     const formattedDate = isoDate.split('T')[0]; // Extracting YYYY-MM-DD
    //     const username = req.session.username;
    //     console.log(formattedDate)
    
    //     try {
    //         const user = await trackerTour.findOne({ UserName: username });
           
    //         if (!user) {
    //             return res.status(404).json({ message: 'User not found' });
    //         }
            
    //         if (!user.Data) {
    //             console.log('User data is empty');
    //             next()
    //         }
    //         else{
    //             console.log(user)
    //         const dates = await user.Data.get(formattedDate)
    //         console.log(dates)
    //         console.log('hey it is inside the else block of the TodayTrasaction')
    //         if (dates) {
    //             console.log('Data for Today is already filled up');
    //             return res.status(400).json({ message: 'Data for Today is already filled up' });
    //         } else {
    //             next();
    //         }
    //     } 
    // }
    // catch(err){
    //     console.log(err);
    // }
    // };
    