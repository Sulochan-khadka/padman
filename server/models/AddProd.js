const mongoose=require('mongoose')

const addProductschema=new mongoose.Schema({
     productName: {
        type: String,
        required: true
    },
    actualPrice: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: [{
        type: String, // Assuming storing image URLs
        required: true
    }]
    

});

const newproducts=new mongoose.model("newproducts",addProductschema);
module.exports=newproducts;

