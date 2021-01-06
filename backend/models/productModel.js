const mongoose = require("mongoose");

const ProductSchema = new Schema({
    title : {
        type : String,
        required : true ,
    },
    
    price : {
        type : Number,
        required : true,
    },
    
    description : {
        type : String,
        required : true,
    },
    
    images : {
        type : Object,
        required : true,
    },
    
    date: {
        type : Date,
        default :Date.now,
    }

})

module.exports = mongoose.model("Product" , ProductSchema)