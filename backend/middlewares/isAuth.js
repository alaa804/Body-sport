 const User = require("../models/User");
 const jwt = require("jsonwebtoken");





 const isAuth = async (req , res , next) => {
      
     const token = req.headers.authorization;
     
     try {
         const decoded = jwt.verify(token , process.env.SECRET);
         const user = await User.findById(decoded.userID).select("-password")
         if (!user){
             return res.status(401).send([{msg: "Unauthorized"} ])
         }
         req.user = user;
         next();
     } catch (error) {
         res.send([{msg : "Unauthorized"}]);   
     }
 } ;
 module.exports = isAuth;