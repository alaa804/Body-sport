const express = require("express");
const router = express.Router();
const {getCategory} = require("../controllers/categoryController")


router.get("/category" , getCategory)



module.exports = router ;