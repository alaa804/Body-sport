const express = require("express")
const router = express.Router()
const { Products , addProduct ,removeProduct,  editProduct} = require("../controllers/productController")

router.get("/product" , Products )
router.post("/product" , addProduct )
 router.put("/product/:id" , editProduct  )
router.delete("/product/:id" , removeProduct )


module.exports = router ;