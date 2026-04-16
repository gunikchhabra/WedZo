const user=require("../models/user.js");

module.exports.renderSignUp=(req,resp)=>{
    resp.render("templates/signup.ejs");
}

module.exports.signUp=async(req,resp,next)=>
{
        let {username,email,password}=req.body; 
        let newUser= new user({username,email}); // object passed
        let res= await user.register(newUser,password);
        if(res)
        {
            req.login(newUser,(err)=>
            {
                if(err)
                {
                    return next(err);
                }
                else
                {
                console.log("user ",req.user);
                req.flash("success","You have registered Successfully !");
                resp.redirect("/");
                }
            })
            
        }
        else
        {
            req.flash("error","There occured some error in registering !");
            resp.redirect("/");
        }
    
}

module.exports.renderLogin=(req,resp)=>
{
    resp.render("templates/loginuser.ejs");
}

module.exports.login=async(req,resp)=>{
        req.session.userId=req.user._id;
        req.flash("success","Welcome Back ! ");
        if(req.session.redUrl)
        {
            resp.redirect(`${req.session.redUrl}`);
        }
        else
        {
            resp.redirect("/");
        }
        
    }