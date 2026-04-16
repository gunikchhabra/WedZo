module.exports.support=(req,resp)=>
{
    resp.render("templates/support.ejs");
}

module.exports.about=(req,resp)=>
{
    resp.render("templates/about.ejs");
}