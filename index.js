require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const app = express();
const path=require("path");
const shop = require("./models/shop.js");
const user=require("./models/user.js");
const ejsMate=require("ejs-mate"); // to use layout tag
const session=require("express-session");
const MongoStore=require("connect-mongo").default;
const passport=require("passport");
const localStrategy=require("passport-local");
const ExpressError=require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");
const cors=require("cors");
const flash=require("connect-flash");

const userRouter=require("./routes/user.js");
const shopRouter=require("./routes/shop.js");
const reviewRouter=require("./routes/review.js");
const productRouter=require("./routes/product.js");
const cartRouter=require("./routes/cart.js");
const orderRouter=require("./routes/order.js");
const navRouter=require("./routes/nav.js");

const dbUrl = process.env.ATLASDB_URL;
if(!dbUrl) {
    console.log("Database URL missing");
    process.exit(1);
}
let port = 8080;

async function main()
{
    try{
        let conn = await mongoose.connect(dbUrl);
        console.log("Connection Succesfull");
    }
    catch(err)
    {
        console.log("Error occured ! ",err.message);
    }
}
main();
// set template engine
app.set("view engine","ejs");
// set path for views 
app.set("views",path.join(__dirname,"/views")); // views/

// serve static files 
app.use(express.static(path.join(__dirname,"/public")));

// parse data from post request 
app.use(express.urlencoded({extended:true}));

app.engine('ejs',ejsMate);

const store=MongoStore.create({
    mongoUrl:dbUrl,  // where session info is stored
    crypto:{        // encrypts session data
        secret:process.env.SECRET,
    },
    touchAfter:24*60*60 // update session only after 24 hrs
});
store.on("error",(err)=>{
    console.log("Error in session store ",err);
});
const sessionOptions = {
    store,
    secret:process.env.SECRET, // sign sessionId cookie
    resave:false,
    saveUninitialized:false, // session created only when needed 
    cookie:{
        maxAge:12*31*24*60*60*1000, // milliseconds
    } 
}
app.use(session(sessionOptions));
app.use(cors());
app.use(flash());


// setup passport 
app.use(passport.initialize());
app.use(passport.session());


// will run everytime login is performed
// 2 strategies 
passport.use("user-local",new localStrategy(user.authenticate()));
passport.use("shop-local",new localStrategy(shop.authenticate()));

// store user data (user id) in session 
passport.serializeUser((loggedInObject,done)=>{
    done(null,{id:loggedInObject._id,type:loggedInObject.constructor.modelName});
});

// loggedInObject = object of db that loggs in 
// done(null,data to store in a session) => null = no error 


// retrieve user data from DB using info stored in session 
// done is a function given by passport , it is a way of saying i have done my work and here are the results syntax = done(error / null , result)
passport.deserializeUser(async (Obj, done) => {
    try {
        if (Obj.type === "User") {
            const userData = await user.findById(Obj.id);
            return done(null, userData);
        } else {
            const shopData = await shop.findById(Obj.id);
            return done(null, shopData);
        }
    } catch (err) {
        done(err, null);
    }
});




app.listen(port,()=>
    {
        console.log("I AM ON")
    });


app.use((req,resp,next)=>
{
    resp.locals.success=req.flash("success");
    resp.locals.error=req.flash("error");
    resp.locals.currUser=req.user;
    next();
})
app.use("/user",userRouter);
app.use("/shop",shopRouter);
app.use("/addReview",reviewRouter);
app.use("/addProduct",productRouter);
app.use("/cart",cartRouter);
app.use("/order",orderRouter);
app.use("/nav",navRouter);

// Home
app.get("/",wrapAsync(async (req,resp)=>
{
    const data = await shop.find({});
    resp.render("templates/index.ejs",{data});
}));




// login
app.get("/login",(req,resp)=>
{
    resp.render("templates/login.ejs");
})
// Logout
app.get("/logout",(req,resp)=>
{
    req.logout((err)=>
    {
        if(err)
        {
            next(err);
        }
        else
        {
            req.flash("success","You are Logged Out Successfully ! ");
            resp.redirect("/");
        }
    })
})


// Other Routes 
app.all("{*any}",(req,resp,next)=>
{
    next(new ExpressError(404,"Page Not Found !"));
});

// express error handling route  
app.use((err,req,resp,next)=>{
    let{status=500,message="Something went wrong Here !"}=err;
    resp.status(status).render("templates/error.ejs",{err})
});