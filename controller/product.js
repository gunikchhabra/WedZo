const product = require("../models/products.js");
const mongoose=require("mongoose");

module.exports.renderAdd=(req,resp)=>
{
    let shopRef = new mongoose.Types.ObjectId(req.params.shopRef);
    resp.render("templates/addProduct.ejs",{shopRef});
}

module.exports.addProduct=async(req,resp)=>
{
    let {name,category,price}=req.body;
    let imgArr = req.files.map((el)=>el.path);
    let newProduct = new product({name:name,category:category,price:price,images:imgArr,shopRef:new mongoose.Types.ObjectId(req.params.shopRef)});
    let res = await newProduct.save();
    if(res)
    {
        req.flash("success","Product added Successfully");
    }
    else
    {
        req.flash("error","Unable to add Your Product");
    }
    resp.redirect(`/shop/${req.params.shopRef}`);
}