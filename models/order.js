const mongoose=require("mongoose");
const user = require("./user.js");
const product = require("./products.js");
const orderSchema=new mongoose.Schema({
    userId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    items:[  
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true,
        }],
    Add:
    {
        add1:
        {
            type:String,
            required:true,
        },
        add2:
        {
            type:String,
        },
        state:
        {
            type:String,
            required:true,
        },
        pincode:
        {
            type:String,
            required:true,
        },
        city:
        {
            type:String,
            required:true,
        },
    },
    ExpDel:
    {
        type:Date,
        default:()=>{
            let d=new Date();
            d.setDate(d.getDate()+7);
            return d;
        },
    },
    totalAmt:
    {
        type:Number,
        required:true,
    }
});

module.exports=mongoose.model("Order",orderSchema);




