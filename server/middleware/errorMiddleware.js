const notFound= (req, res, next)=>{
    res.status(404);
    next(new error(`NOT FOUND - ${req.originalUrl}`))
}

const errorHandler= (err, rea, res, next)=>{
    const statusCode= res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message, stack: process.env.NODE_ENV === "production"? null : err.stack
    });
}

module.exports= {notFound, errorHandler};