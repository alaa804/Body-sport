const products = require("../models/productModel")


//Get products

const Products = (req , res) => {
    products.find()
    .then((products) => res.send({msg : "GET PRODUCTS" , products}))
    .catch((err) => res.send({msg : "ERROR" , err}))
}

// Add product

const addProduct = (req , res) => {
    const { category , title , price , description , date , images} = req.body;
    const newProduct = new products({category , title , price , description , date , images})
    newProduct.save()
    .then((product) => res.send({msg : "product Added with success" , product}) )
    .catch((err) => res.send({msg : "ERROR ADD" , err}))
}

//Edit product

const editProduct = (req , res) => {
    const id = req.params.id
    products.findByIdAndUpdate(id , req.body , {new : true})
    .then((product) => res.send({msg : "Product Updated" , product}) )
    .catch((err) => res.status(400).send({msg : "ERROR UPDATED" , err}))
}

//Remove product

const removeProduct = (req , res) => {
    const id = req.params.id
    products.findByIdAndDelete(id)
    .then((product) => res.send({msg : "Product Deleted" , product}))
    .catch((err) => res.status(400).send({msg : "ERROR DELETED" , err}))
}



module.exports = {
    Products ,
    addProduct ,
    editProduct ,
    removeProduct ,
}