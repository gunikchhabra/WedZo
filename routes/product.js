const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isShopLoggedIn,validateProduct}=require("../middlewares.js");
const {strategy} = require("../cloudinaryConfig.js");
const multer = require("multer");
const upload = multer({storage:strategy});

const productController=require("../controller/product.js");

// Add New Product 
router.get("/:shopRef",isShopLoggedIn,productController.renderAdd);

router.post("/:shopRef",upload.array('images',5),validateProduct,wrapAsync(productController.addProduct));

module.exports=router;