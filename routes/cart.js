const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isUserLoggedIn}=require("../middlewares.js");
const ExpressError=require("../utils/ExpressError.js");
const cart=require("../models/cart.js");
const mongoose=require("mongoose");
const cartController=require("../controller/cart.js");



router.get("/addToCart/:shopId/:prodId",isUserLoggedIn,wrapAsync(cartController.addToCart));

router.get("/view",isUserLoggedIn,wrapAsync(cartController.viewCart));

router.get("/incQty/:prodId/:userId",wrapAsync(cartController.incQty));

router.get("/decQty/:prodId/:userId",wrapAsync(cartController.decQty));

router.get("/remove/:prodId/:userId",wrapAsync(cartController.removeProduct));

module.exports=router;
