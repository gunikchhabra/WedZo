const mongoose=require("mongoose");
const user = require("./user.js");
const reviewSchema = new mongoose.Schema({
    comment:String,
    username:String,
    rating:
    {   
        type:Number,
        min:1,
        max:5,
    },
    createdAt:{
    type:Date,
    default:Date.now(),
    },
    User:
    {
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    }
});
module.exports=mongoose.model("review",reviewSchema);