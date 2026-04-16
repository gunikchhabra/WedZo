const shop = require("../models/shop.js");
const product = require("../models/products.js");
const mongoose=require("mongoose");

module.exports.renderSignUp=(req,resp)=>{
    resp.render("templates/signupShop.ejs");
}

module.exports.signUp=async(req,resp,next)=>
{
        let {username,shopName,address,email,password,contactNo}=req.body;
        let shopImage=req.file.path;
        let newShop = new shop({username,shopName,address,email,shopImage,contactNo});
        let res = await shop.register(newShop,password);
        console.log(res);
        if(res)
        {
            req.login(newShop,(err)=>
            {
                if(err)
                {
                    return next(err);
                }
                else
                {
                    req.flash("success","Registered Successfully !");
                    resp.redirect("/");
                }
            })
        }
        else
        {
            req.flash("error","Couldn't Register");
            resp.redirect("/");
        }
        

}

module.exports.renderLogin=(req,resp)=>
{
    resp.render("templates/loginshop.ejs");
}

module.exports.login=(req,resp)=>{
    req.flash("success","Welcome Back ! ");
    if(req.session.redUrl)
    {

        resp.redirect(`${req.session.redUrl}`);
    }
    else
    {
        resp.redirect("/");
    }
}

module.exports.viewShop=async(req,resp)=>
{
    let shopId=req.params.shopId;
    let isShop = req.session.isShop;
    let {shopName} = await shop.findById(shopId);
    const {reviews} = await shop.findById(shopId).populate("reviews");
    let data = await product.find({shopRef:new mongoose.Types.ObjectId(req.params.shopId)});
    resp.render("templates/shop.ejs",{data,shopId,shopName,isShop,reviews});
}