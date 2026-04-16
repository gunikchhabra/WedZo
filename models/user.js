const mongoose=require("mongoose");
const passLocalMongoose=require("passport-local-mongoose").default;
const userSchema=new mongoose.Schema({
    email:
    {
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    }
});
userSchema.plugin(passLocalMongoose);
module.exports = mongoose.model("User",userSchema);

