function errorHandler(err, req, res, next)
{
    console.log(err);
    if(typeof(err) === 'string')
    {
        console.log(err);
        return res.status(400).json({message: err});
    }
    if(err.name === 'ValidationError')
    {
        return res.status(400).json({message: err.message})
    }
    if(err.name === 'UnauthorizedError')
    {
        return res.status(401).json({message: 'Invalid Token'})
    }
    return res.status(500).json({message: err.message})
}

exports.errorHandler = errorHandler;