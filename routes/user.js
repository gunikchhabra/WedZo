const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {validateUser}=require("../middlewares.js");
const passport=require("passport");
const userController=require("../controller/user.js");


// user signup
router.get("/signup",userController.renderSignUp);

router.post("/signup",validateUser,wrapAsync(userController.signUp));

// user login
router.get("/login",userController.renderLogin);
// as soon as login button is clicked , request comes to /login/user route , ab authenticate krne ka kaam passport krega , passport ka middleware you have to write , before your route handler 

router.post("/login",
    passport.authenticate("user-local",{failureRedirect:"/user/login",failureFlash:true,keepSessionInfo:true}),
    wrapAsync(userController.login)
);


module.exports=router;


