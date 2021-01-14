const category = require("../models/categoryModel")


const getCategory = async (req , res) => {
    try {
        const categories = await category.find()
            res.json(categories)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}


module.exports = {
    getCategory
}