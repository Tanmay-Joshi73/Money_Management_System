const express=require('express')
const router=express.Router()
const {Home,LoginPage,CreatePage1}=require('./../Controller/Usercontroller')
router.route('/Home').get(Home)
router.route('/Login').get(LoginPage)
router.route('/Create').get(CreatePage1)
module.exports=router
