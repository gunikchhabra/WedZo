require('dotenv').config({path:"../.env"});
const mongoose = require("mongoose");

//Data
const {users,shops,products}=require('./data.js');


// Models
const shop = require("../models/shop.js");
const user=require("../models/user.js");
const product = require("../models/products.js");


const dbUrl = process.env.ATLASDB_URL;

async function main()
{
    try{
        let conn = await mongoose.connect(dbUrl);
        console.log("Connection Succesfull");
        await initDB();
        console.log("Done With initialisation");
    }
    catch(err)
    {
        console.log("Error occured ! ",err.message);
    }
}
main();

async function initDB()
{
    try{
        await product.deleteMany({});
        await product.insertMany(products);
        await shop.deleteMany({});
        await shop.insertMany(shops);
        await user.deleteMany({});
        await user.insertMany(users);
    }
    catch(err)
    {
        console.log(err.message);
    }
}





