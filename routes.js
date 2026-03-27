const express= require('express')
const UserController= require('./controllers/userController')
const router=new express.Router()
const blogController = require('./controllers/blogController')
const jwt = require('./middlware/JWTmiddleware')
const multer= require ('./middlware/multermiddleware')
const historyController = require('./controllers/historyController')
const testimonialController=require('./controllers/testimonialController')


router.post('/register',UserController.registerController)




router.post('/login',UserController.loginController)



router.post('/Addblog',jwt,multer.single('blogImage'),blogController.addBlogController)



router.get('/homeBlog',blogController.getHomeBlogController)

router.get('/Allblogs',blogController.allBlogController)

router.get('/userBlogs',jwt,blogController.myBlogController)

router.delete('/deleteBlogs/:id',blogController.deleteBlogController)

router.put('/update-blog/:id',jwt,multer.single('blogImage'),blogController.EditBlogController)

router.put('/userProfile',jwt,multer.single('profileImage'),UserController.userProfileController)

router.post('/addHistory',jwt,historyController.userHistoryController)

router.get('/readhistory',jwt,historyController.readHistoryController)

router.delete('/deleteHistory/:id',historyController.deleteHistoryController)

router.post('/addTestimonials',jwt,testimonialController.addTestimonialsController)

router.get('/allTestimonials',testimonialController.getTestimonialController)

module.exports=router

