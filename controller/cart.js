const cart = require("../models/cart");
const ExpressError=require("../utils/ExpressError");
const mongoose=require("mongoose");


module.exports.addToCart=async(req,resp)=>
{
    
    let res = await cart.findOne({prodId:new mongoose.Types.ObjectId(req.params.prodId),userId:req.user._id});
    if(res)
        {
            res.quantity++;
            await res.save();
        }
    else
        {
            let newEntry = new cart({prodId:req.params.prodId,quantity:1,userId:req.user._id});
            await newEntry.save();
        }
    req.flash("success","Added Successfully !");
    resp.redirect(`/shop/${req.params.shopId}`);
}

module.exports.viewCart=async(req,resp)=>
{
    let userId=req.user._id;
    let tempdata = await cart.find({userId:userId}).populate("prodId").populate("userId");
    if(tempdata.length===0)
    {
        resp.render("templates/cart.ejs",{empty:true});
    }
    else
    {
        let data=tempdata.map((el)=>{
        let obj ={name:el.prodId.name,price:el.prodId.price,images:el.prodId.images,qty:el.quantity,prodId:el.prodId._id};
        return obj;
        });
        let {username,_id} = tempdata[0].userId;
        resp.render("templates/cart.ejs",{data,username,_id,empty:false});
    }
}

module.exports.incQty=async(req,resp)=>{
    let data = await cart.findOne({prodId:req.params.prodId,userId:req.params.userId});
    data.quantity +=1;
    await data.save();
    resp.redirect("/cart/view");
}

module.exports.decQty=async(req,resp)=>{
    let data = await cart.findOne({prodId:req.params.prodId,userId:req.params.userId});
    data.quantity -=1;
    if(data.quantity>0)
    {
        await data.save();
        resp.redirect("/cart/view");
    }
    else
    {
        let id = data._id;
        await cart.findByIdAndDelete(id);
        resp.redirect("/cart/view");
    }
    
}

module.exports.removeProduct=async(req,resp)=>{
    let data = await cart.findOne({prodId:req.params.prodId,userId:req.params.userId});
    let id = data._id;
    let res = await cart.findByIdAndDelete(id);
    if(res)
    {
        req.flash("success","Item Removed Successfully !");
        resp.redirect("/cart/view");
    }
    else
    {
        throw new ExpressError(400,"Some Error Occured while removing Element !");
    }
}