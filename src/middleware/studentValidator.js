const constants = require('../constants/errorCodes');

const validateStudent = (req,res,next) => {
    const {name,email,age,course} = req.body;

    //Check missing fields
    if(!name || !age|| !email || !course){
        return res.status(constants.VALIDATION_ERROR).json({
            message: "All fields are mandotory"
        });
    }

    //check data types
    const parsedAge = Number(age);

    if (isNaN(parsedAge) || parsedAge <= 0) {
        return res.status(constants.VALIDATION_ERROR).json({
            message: "Age must be a positive number"
        });
    }

req.body.age = parsedAge;

    //sanitization
    req.body.name = name.trim();
    req.body.email = email.trim().toLowerCase();
    req.body.course = course.trim();

    //email check
    const emailRegex = /^\S+@\S+\.\S+$/;
    if(!emailRegex.test(req.body.email)){
        return res.status(constants.VALIDATION_ERROR).json({
            message: "Please provide a valid email"
        });
    }

    next();
};

module.exports = validateStudent;

