const mongoose = require("mongoose");
const User = require("./user");
const product = require("./products");
const cartSchema=new mongoose.Schema({
    prodId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
    },
    quantity:
    {
        type:Number,
        required:true,
    },
    userId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
})
module.exports=mongoose.model("Cart",cartSchema);