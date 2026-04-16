const {shopSchema,userSchema,productSchema,reviewSchema,addSchema}=require("./joiSchema.js");
const ExpressError=require("./utils/ExpressError.js");
const mongoose = require("mongoose");

const validateShop = ((req,resp,next)=>
{
    let {error}=shopSchema.validate(req.body,{abortEarly:false});
    console.log(error)
    if(error)
    {
        const errMsg=error.details.map((el)=>( el.message)).join(",");
        throw new ExpressError(400,errMsg);
    }
    else
    {
        next();
    }
});

const validateProduct = ((req,resp,next)=>
{
    let {error}=productSchema.validate(req.body,{abortEarly:false});
    if(error)
    {
       const errMsg = error.details.map((el)=>el.message).join(",");
       throw new ExpressError(400,errMsg);
    }
    else
    {
        next();
    }
});

const validateReview=(req,resp,next)=>
{
    let {error}=reviewSchema.validate(req.body,{abortEarly:false});
    if(error)
    {
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else
    {
        next();
    }
}

const validateUser = ((req,resp,next)=>
{
    const {error}=userSchema.validate(req.body,{abortEarly:false});
    if(error)
    {
        const errMsg=error.details.map((el)=>{return el.message}).join(",");
        throw new ExpressError(400,errMsg);
    }
    else
    {
        next();
    }
}); 


const validateAddress=((req,resp,next)=>
{
    const {error}=addSchema.validate(req.body,{abortEarly:false});
    if(error)
    {
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else
    {
        next()
    }
});

const isShopLoggedIn = (req,resp,next)=>
{
    let shopRef=new mongoose.Types.ObjectId(req.params.shopRef)
    if(!req.isAuthenticated())
    {
        req.flash("error","You must be Logged in first ! ");
        req.session.redUrl = req.originalUrl;
        resp.redirect("/shop/login");
        return;
    }
    if(req.session.passport.user.type !== "Shop")
    {
        req.flash("error","Only shopkeepers can perform this action");
        resp.redirect("/");
        return;
    }
    if(!(shopRef.equals(req.user._id)))
    {
        req.flash("error","You can add Products to your shop only ! ");
        resp.redirect("/");
        return;
    }
    else
    {
        next();
    }
}

const isShop = (req,resp,next)=>
{
    let currShop=new mongoose.Types.ObjectId(req.params.shopId);
    if(req.isAuthenticated() && req.session.passport.user.type == "Shop" && currShop.equals(req.user._id))
    {
        req.session.isShop = true;
        next();
    }
    else
    {
        req.session.isShop = false;
        next();
    }
}

const isUserLoggedIn = (req,resp,next)=>
{
    if(req.isAuthenticated() && req.session.passport.user.type=="User")
    {
        next();
    }
    else
    {
        req.flash("error","You have to login First !");
        req.session.redUrl=req.originalUrl;
        resp.redirect("/user/login");
    }
}


module.exports={validateShop,validateUser,validateProduct,isShopLoggedIn,isShop,isUserLoggedIn,validateReview,validateAddress};