 const express = require("express");
 const router = express.Router();

 const {register} = require("../controllers/authController")
 const {registerRules , validator} = require("../middlewares/bodyValidator")








 router.post("/register",registerRules(),validator, register)

 module.exports = router;