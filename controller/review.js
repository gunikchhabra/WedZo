const shop = require("../models/shop.js");
const user = require("../models/user.js");
const review=require("../models/review.js");

module.exports.renderReview=(req,resp)=>
{
    let shopId=req.params.shopId;
    resp.render("templates/review.ejs",{shopId});
}

module.exports.createReview=async(req,resp)=>
{
    let data = await shop.findById(req.params.shopId);

    // review creation 
    let {comment,rating}=req.body;
    let {username}=await user.findById(req.session.userId);
    let newReview = new review({comment:comment,rating:rating,username:username});
    newReview.User=req.session.userId;
    await newReview.save();

    // push reviews to shop 
    let id=newReview._id;
    data.reviews.push(id);
    await data.save();

    req.flash("success","Review Added!");
    resp.redirect(`/shop/${req.params.shopId}`);
}