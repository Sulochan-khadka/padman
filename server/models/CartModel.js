const mongoose=require('mongoose')


const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
});

const CartModel = mongoose.model("Cart", cartSchema);


module.exports=CartModel;
