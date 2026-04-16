const order=require("../models/order.js");
const ExpressError=require("../utils/ExpressError.js");
const cart=require("../models/cart.js");
module.exports.view=async(req,resp)=>
{
    let data = await order.find({userId:req.user._id}).populate("userId");
    let hasOrdered;
    if(data.length)
    {
     hasOrdered=true;
    }
    else
    {
    hasOrdered=false;
    }
    resp.render("templates/orders.ejs",{data,hasOrdered});
}
module.exports.renderCheckout=(req,resp)=>
{
    resp.render("templates/checkout.ejs");
}

module.exports.checkout=(req,resp)=>{
        req.session.address=req.body;
        resp.redirect("/order/payment");
}

module.exports.payMode=(req,resp)=>
{
    resp.render("templates/payment.ejs");
}

module.exports.placeOrder=async(req,resp)=>
{
    let userId=req.user._id;
    let cartData = await cart.find({userId:userId}).populate("prodId");
    let totalAmt=0;
    let prodIds=cartData.map((el)=>
    {
        totalAmt += (el.quantity*(el.prodId.price));
        return el.prodId._id;
    })
    let newOrder = new order({userId:userId,items:prodIds,totalAmt:totalAmt,Add:req.session.address.Add});
    let result=await newOrder.save();
    await cart.deleteMany({ userId: userId });
    if(result)
    {
        req.flash("success","Order Placed");
        resp.redirect("/");
    }
    else
    {
        throw new ExpressError(400,"Error in Placing Order");
    }
    
}