const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview,isUserLoggedIn}=require("../middlewares.js");
const reviewController=require("../controller/review.js");

// Reviews
router.get("/:shopId",isUserLoggedIn,reviewController.renderReview);


router.post("/:shopId",validateReview,wrapAsync(reviewController.createReview));

module.exports=router;