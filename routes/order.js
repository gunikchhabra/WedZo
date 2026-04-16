const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isUserLoggedIn, validateAddress}=require("../middlewares.js");
const orderController=require("../controller/order.js");

router.get("/view",isUserLoggedIn,wrapAsync(orderController.view));

router.get("/checkout",isUserLoggedIn,orderController.renderCheckout);

router.post("/checkout",isUserLoggedIn,validateAddress,orderController.checkout);

router.get("/payment",isUserLoggedIn,orderController.payMode);

router.post("/placeorder",isUserLoggedIn,wrapAsync(orderController.placeOrder));

module.exports=router;


