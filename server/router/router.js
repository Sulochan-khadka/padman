const express = require('express');
const router = express.Router();
const multer = require('multer');
const newproducts = require('../models/AddProd');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the destination folder
    },
    filename: function (req, file, cb) {
        // Generate a unique filename
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post("/addproduct", upload.array('images', 5), async (req, res) => {
    try {
        console.log(req.file)
        const images = req.files.map(file => file.filename);
        const newProduct = new newproducts({
            productName: req.body.productName,
            actualPrice: req.body.actualPrice,
            discountPrice: req.body.discountPrice,
            description: req.body.description,
            images: images
        });
        const savedProduct = await newProduct.save();
        console.log("New product added", savedProduct);
        res.status(200).send(savedProduct);
    } catch (err) {
        res.status(400).send(err);
    }
});

 
router.get("/addproduct",async(req,res)=>{
    try{
         const prodName=await newproducts.find({})
         res.status(200).send(prodName)
        //  console.log(prodName)
    }
    catch(err){
       console.log(err)
    }
})




 




  module.exports=router;








// router.post("/addproduct", async (req, res) => {
   
//     try {
//             console.log(req.body.images)
//         // Convert base64 images to buffer
//         // const imagesBuffer = req.body.images.map(image => Buffer.from(image, 'base64'));
//         const newProduct = new newproducts({
//             productName: req.body.productName,
//             actualPrice: req.body.actualPrice,
//             discountPrice: req.body.discountPrice,
//             description: req.body.description,
//             images: req.body.images,
//             image1: req.body.image1,
//         });
//         console.log(newProduct)

//         // Save the new product to the database
//         const savedProduct = await newProduct.save();

//         console.log("New product added", savedProduct);
//         res.status(200).send(savedProduct);
//     } catch (err) {
//         console.error("Error adding new product:", err);
//         res.status(400).send(err);
//     }
// });








