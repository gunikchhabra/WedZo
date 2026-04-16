const mongoose = require("mongoose");
const review = require("./review.js");
const passLocalMongoose=require("passport-local-mongoose").default;
const shopSchema = new mongoose.Schema({
    shopName:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    contactNo:{
        type:String,
        required:true,
    },
    shopImage:{
            type:String,
            default:"https://content.jdmagicbox.com/v2/comp/delhi/s8/011pxx11.xx11.171005144345.g3s8/catalogue/chhabra-555-fashions-pvt-ltd-chandni-chowk-delhi-saree-retailers-2rtw956.jpg",
            set:(v)=> v===" " ? "https://content.jdmagicbox.com/v2/comp/delhi/s8/011pxx11.xx11.171005144345.g3s8/catalogue/chhabra-555-fashions-pvt-ltd-chandni-chowk-delhi-saree-retailers-2rtw956.jpg" : v,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    reviews:[
      {
      type:mongoose.Schema.Types.ObjectId,
      ref:"review",
    }],
})

shopSchema.plugin(passLocalMongoose);
module.exports = mongoose.model("Shop",shopSchema);

