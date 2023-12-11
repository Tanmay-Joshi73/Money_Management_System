const express=require('express')
const router=express.Router()
const {Home,LoginPage,CreatePage1,sendMail,ProfiePage}=require('./../Controller/Usercontroller')
router.route('/Home').get(Home)
router.route('/Login').get(LoginPage)
router.route('/Create').post(CreatePage1)
router.route('/submitform').post(sendMail)
router.route('/Profile').post(ProfiePage)
module.exports=router
