const express=require('express')
const router=express.Router()
const {Home,LoginPage,CreatePage1,sendMail}=require('./../Controller/Usercontroller')
router.route('/Home').get(Home)
router.route('/Login').get(LoginPage)
router.route('/Create').get(CreatePage1)
router.route('/submitform').post(sendMail)
module.exports=router
