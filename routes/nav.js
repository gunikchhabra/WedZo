const express=require("express");
const router=express.Router();
const navController=require("../controller/nav");

router.get("/support",navController.support);
router.get("/about",navController.about);

module.exports=router;