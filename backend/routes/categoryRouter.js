const express = require("express");
const router = express.Router();
const {getCategory , createCategory , deleteCategory , updateCategory} = require("../controllers/categoryController")
const isAuth = require("../middlewares/isAuth");
const authAdmin = require('../middlewares/authAdmin')

router.get("/category" , getCategory)

router.post("/category" , isAuth , authAdmin , createCategory )

router.delete("/category/:id" , isAuth , authAdmin , deleteCategory )

router.put("/category/:id" , isAuth , authAdmin , updateCategory  )



module.exports = router ;