import React, { useState } from "react";
import './addProduct.css'
import axios from "axios";

const AddProduct = () => {
    const [prodInfo, setProdInfo] = useState({
        productName: "",
        actualPrice: "",
        discountPrice: "",
        description: "",
        images: [], // Change to array to store multiple images
    });

    const handleImageChange = (e) => {
        const files = e.target.files;  
        const imageFiles = Array.from(files);
        setProdInfo({
            ...prodInfo,
            images: [...prodInfo.images, ...imageFiles] // Merge new images with existing ones
        });
    };

    const handleInputChange = (field, value) => {
        setProdInfo({
          ...prodInfo,
          [field]: value,
        });
    };

    const [addproductSuccess, setaddproductSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('productName', prodInfo.productName);
        formData.append('actualPrice', prodInfo.actualPrice);
        formData.append('discountPrice', prodInfo.discountPrice);
        formData.append('description', prodInfo.description);
        prodInfo.images.forEach(image => {
            formData.append('images', image);
        });

        axios.post('http://localhost:8000/addproduct', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(result=>{
            console.log("the data is", result.data);
            setaddproductSuccess(true);
        })
        .catch(err=>{
            console.log(err)
        });
    };
  
    return (
        <div className="Addproduct-container">
            {addproductSuccess && (
                <p className='success_mesg'>Product added successfully...!</p>
            )}
            <h2 className='text-lightpink text-4xl font-roboto font-full-bold'>Add Products Details</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <label htmlFor="productName">Product Name:</label>
                <input type="text" id="productName" value={prodInfo.productName} onChange={(e) => handleInputChange('productName', e.target.value)} required />
                
                <label htmlFor="actualPrice">Actual Price:</label>
                <input type="number" id="actualPrice" value={prodInfo.actualPrice} onChange={(e) => handleInputChange('actualPrice', e.target.value)} min="0" step="0.01" required />
                
                <label htmlFor="discountPrice">Discount Price:</label>
                <input type="number" id="discountPrice" value={prodInfo.discountPrice} onChange={(e) => handleInputChange('discountPrice', e.target.value)} min="0" step="0.01" required />
                
                <label htmlFor="description">Description:</label>
                <textarea id="description" value={prodInfo.description} onChange={(e) => handleInputChange('description', e.target.value)} rows="4" required></textarea>
                
                <label htmlFor="images">Images:File name should be same as product name</label>
                <div>
                <input className="img-inpt" type="file" id="images" accept="image/*" onChange={handleImageChange} multiple required />
                   
                </div>
     
             
                <button className="btn-sbmt" type="submit" style={{backgroundColor:'#F38D7D'}}>Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;






// import React, { useState } from "react";
// import './addProduct.css'
// import axios from "axios";
 

// const AddProduct = () => {
//     const [prodInfo, setProdInfo] = useState({
//         productName: "",
//         actualPrice: "",
//         discountPrice: "",
//         description: "",
//         images: "",
//         image1:""
//     });
//     const handleImageChange = (e) => {
//         const files = e.target.files;  
//         const imageNames = Array.from(files).map(file => file.name); // Extract filenames from selected files
    
//         setProdInfo({
//             ...prodInfo,
//             images: imageNames 
//         });
//     };
//     const handleImageChange1= (e) => {
//         const files = e.target.files;  
//         const imageNames = Array.from(files).map(file => file.name); // Extract filenames from selected files
    
//         setProdInfo({
//             ...prodInfo,
//             image1: imageNames 
//         });
//     };
    

//     const handleInputChange = (field, value) => {
//         setProdInfo({
//           ...prodInfo,
//           [field]: value,
//         });
//     };

//     const [addproductSuccess, setaddproductSuccess] = useState(false);

//     function convertToBase64(e){
//         const file = e.target.files[0];
//         const reader= new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload=()=>{
//             setProdInfo({
//                 ...prodInfo,
//                 images: reader.result
//             });
//         };
//         reader.onerror= error =>{
//             console.log("error",error)
//         }
//     }


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(prodInfo)
//         axios.post('http://localhost:8000/addproduct',{
//             productName: prodInfo.productName,
//             actualPrice: prodInfo.actualPrice,
//             discountPrice: prodInfo.discountPrice,
//             description: prodInfo.description,
//             images: prodInfo.images,
//             image1:prodInfo.image1
//         })
//         .then(result=>{
//             console.log("the data is",result.data);
//             // window.location.reload();
//             setaddproductSuccess(true);
//         })
//         .catch(err=>{
//             console.log(err)
//         })  
//     };
  
//     return (
//         <div className="Addproduct-container">
//             {addproductSuccess && (
//             <p className='success_mesg'>Product added successfully...!</p>
//           )}
//         <h2 className='text-lightpink text-4xl font-roboto font-full-bold'>Add Products Details</h2>
//         <form onSubmit={handleSubmit} className="form-container">
//             <label htmlFor="productName">Product Name:</label>
//             <input type="text" id="productName" value={prodInfo.productName} onChange={(e) => handleInputChange('productName', e.target.value)} required />
            
//             <label htmlFor="actualPrice">Actual Price:</label>
//             <input type="number" id="actualPrice" value={prodInfo.actualPrice} onChange={(e) => handleInputChange('actualPrice', e.target.value)} min="0" step="0.01" required />
            
//             <label htmlFor="discountPrice">Discount Price:</label>
//             <input type="number" id="discountPrice" value={prodInfo.discountPrice} onChange={(e) => handleInputChange('discountPrice', e.target.value)} min="0" step="0.01" required />
            
//             <label htmlFor="description">Description:</label>
//             <textarea id="description" value={prodInfo.description} onChange={(e) => handleInputChange('description', e.target.value)} rows="4" required></textarea>
            
//             <label htmlFor="images">Images:</label>
//             <input type="file" id="images" accept="image/*" onChange={handleImageChange} multiple required />

//             <label htmlFor="image1">Images:</label>
//             <input type="file" id="image1" accept="image/*" onChange={handleImageChange1} multiple required />
             
//             <button className="btn-sbmt" type="submit" style={{backgroundColor:'#F38D7D'}}>Submit</button>
            
//         </form>
//     </div>
    
//     );
// };

// export default AddProduct;
