module.exports = (req, res, next) =>
{
    if(!req.session.isLoggedIn)
    {
        return res.redirect('/login')
    }
    else
    {
        next();// allows the request to jump to the next middleware.
    }
}