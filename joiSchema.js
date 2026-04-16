const joi = require("joi");
const shopSchema=joi.object({
    username:joi.string().required(),
    shopName:joi.string().required(),
    address:joi.string().required(),
    email:joi.string().email().required(),
    shopImage:joi.string(),
    contactNo:joi.string().pattern(/^[6-9][0-9]{9}$/).required(),
    password:joi.string().required(),
})
const userSchema=joi.object({
    username:joi.string().required(),
    email:joi.string().email().required(),
    password:joi.string().required(),
});

const productSchema = joi.object({
    name:joi.string().required(),
    category:joi.string().required(),
    price:joi.number().min(100).required(),
    images:joi.array().items(joi.string())

});

const reviewSchema=joi.object({
    comment:joi.string().required(),
    username:joi.string(),
    rating : joi.number().min(1).max(5).required(),
    createdAt: joi.date().optional(),
    User: joi.date().optional(),

});

const addSchema=joi.object({
    Add:joi.object({
        add1: joi.string().min(5).required(),
        add2: joi.string().allow("").optional(),
        city: joi.string().required(),
        state: joi.string().required(),
        pincode: joi.string().length(6).pattern(/^[0-9]+$/).required(),
    })
})
module.exports={shopSchema,userSchema,productSchema,reviewSchema,addSchema};


