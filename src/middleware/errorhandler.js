const constants = require('../constants/errorCodes');
const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode? res.statusCode : 500;

    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Error",
                message: err.message,
                stackrace : err.stack
            });
            break;

        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackrace : err.stack
            });
            break;
        
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackrace : err.stack
            });
            break;
        
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stackrace : err.stack
            });
            break;
        
        default:
            return res.json({ 
                title: "Unknown Error",
                message: err.message || "Something went wrong"
            });
        
        
    }
}

module.exports = errorHandler;