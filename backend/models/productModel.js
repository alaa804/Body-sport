const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    category : {
        type : String,
        required : true,
    },
    
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
    
    date: {
        type : Date,
        default :Date.now,
    } ,
    images : {
        type : Object,
        required : true ,
    },
    rating : {
        type : Number,
        required : true ,
    },
    numReviews : {
        type : Number,
        required : true ,
    }

})

module.exports = mongoose.model("Products" , ProductSchema)