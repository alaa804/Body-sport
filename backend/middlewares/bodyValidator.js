 const {body , validationResult} = require("express-validator");
 const  registerRules =() => [
     body("name" ,"name is requierd").notEmpty(),
     body("lastName" ,"last name is requierd").notEmpty(),
     body("email" ,"email is not valid").isEmail(),
     body("password" ,"password not contains 6 characters").isLength({
         min : 6,
         max : 20,
    }),
 ];

 const loginRules = () => [
     body("email" ,"email is not valid").isEmail(),
     body("password" ,"password not contains 6 characters").isLength({
         min : 6,
        max : 20,
     }),
 ];

 const validator = (req , res , next) => {
 const errors = validationResult(req);
 if (!errors.isEmpty()){
     return res.status(400).json(customError(errors.array()));
 }else next();
 };

 const customError = (errorArray) => errorArray.map(err => ({msg: err.msg}));

module.exports = {
    validator,
    loginRules,
    registerRules,
};




