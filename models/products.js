

const mongoose = require("mongoose");
const shop=require("./shop.js");
const productSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
    },
    category:
    {
        type:String,
        required:true,
    },
    price:
    {
        type:Number,
        required:true,
    },
    images:
    {
        type:[String],
        default:["https://glamgirl.in/cdn/shop/files/5c2cfe466125514f87e9a92807e550508e666d81-1677x2515.webp?v=1736995562"],
        set:(v)=> v===" "?"https://glamgirl.in/cdn/shop/files/5c2cfe466125514f87e9a92807e550508e666d81-1677x2515.webp?v=1736995562":v,
    },
    shopRef:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"shop",
    }
})

module.exports = mongoose.model("product",productSchema);


