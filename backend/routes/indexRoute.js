const express = require("express")
const router = express.Router();
const {homepage , signup , signin, signout, sendmail, forgetPassword , upload, createstories, blogs, showBlogs, BlogList, currentuser, uploadBlog} = require("../controller/indexController");
const { isLoggedIn } = require("../utils/auth");


router.get("/", isLoggedIn  , homepage)
// router.route("/").get(homepage)

router.get("/loaduser", isLoggedIn  , currentuser)


// CREATE USER / SIGNUp

//post  /signup create user 

router.post("/signup" , signup)


//post  /signin user 

router.post("/signin" , signin)

//post  /logout user 

router.get("/signout" , isLoggedIn , signout)


//post  /signin user 

router.post("/send-mail" , sendmail)

// get route for forget password 

router.get("/forget-password/:id" , forgetPassword)


// get route for uplooad image

router.get("/upload" , isLoggedIn ,upload)


// ---------------------------------------------------------------------------------------------------------

// post route for create blog

// router.post("/create-blog" , isLoggedIn , createstories ) 
router.post("/create-stories", isLoggedIn, createstories);


// router get for all blogs list
router.get("/blogs"  , blogs)


// router get for all blo\g created by a single user
router.get("/stories" , isLoggedIn , showBlogs)

module.exports = router;

// router list save route
router.get("/BlogList/:blogid" , isLoggedIn , BlogList)

router.post("/uploadBlog", uploadBlog);


// reset-password
// upload-delete