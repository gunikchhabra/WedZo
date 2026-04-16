const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {validateShop,isShop}=require("../middlewares.js");
const passport=require("passport");
const {strategy} = require("../cloudinaryConfig.js");
const multer = require("multer");
const upload = multer({storage:strategy});


const shopController=require("../controller/shop.js");


router.get("/signup",shopController.renderSignUp);

router.post("/signup",upload.single("shopImage"),validateShop,wrapAsync(shopController.signUp));

router.get("/login",shopController.renderLogin);

router.post("/login",passport.authenticate("shop-local",{failureRedirect:"/shop/login",failureFlash:true,keepSessionInfo:true}),
shopController.login);

router.get("/:shopId",isShop,wrapAsync(shopController.viewShop));

module.exports=router;