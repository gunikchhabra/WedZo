function wrapAsync(fun)
{
    return function(req,resp,next)
            {
                fun(req,resp,next).catch(next);
            }
}
module.exports = wrapAsync;

