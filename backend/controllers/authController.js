 
 const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken");
 
 
const User = require('../models/User');


const register = async(req , res) => {
    const {name , lastName , email, password } = req.body;
    try {
        let user = await User.findOne({email});
// //1- check if the user already exists
if (user){
    return res.status(400).json([{msg:  "This User is aleardy exist"}]);
}
// //2- create new user
user = new User({name , lastName , email, password });

// //3- hash the password
const salt = await bcrypt.genSalt(10);
user.password =  await bcrypt.hash( password , salt );
// res.send({user});

// //4- save the user
await user.save()

// //5- login the user(token)
const payload = {
    userID: user._id
}
const token = jwt.sign(payload , process.env.SECRET);

// //6- RESPONSE
res.send({
    token ,
     user :{
    name : user.name,
    lastName : user.lastName,
    email : user.email,
    _id : user._id,
},
});
   } catch(error) {
       console.log(error);
   }
};

 module.exports = {
     register,
 };