import React, { useState } from "react";
import './addProduct.css';
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const AddProduct = () => {
    const Navigate=useNavigate();
    const [step, setStep] = useState(1); // Initial step is 1
    const [prodInfo, setProdInfo] = useState({
        productName: "",
        actualPrice: "",
        discountPrice: "",
        description: "",
        images: [], // Change to array to store multiple images
    });

    const handleInputChange = (field, value) => {
        setProdInfo({
            ...prodInfo,
            [field]: value,
        });
    };

    const handleNextStep = () => {
        setStep(step + 1); // Proceed to next step
    };

    const handlePrevStep = () => {
        setStep(step - 1); // Go back to previous step
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        const imageFiles = Array.from(files);
        setProdInfo({
            ...prodInfo,
            images: [...prodInfo.images, ...imageFiles]
        });
    };

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
            // Optionally, you can reset the form and set the step back to 1
            setProdInfo({
                productName: "",
                actualPrice: "",
                discountPrice: "",
                description: "",
                images: [],
            });
            setStep(1);
            Navigate('/');
        })
        .catch(err=>{
            console.log(err)
        });
    };
  
    return (
        <div className="Addproduct-container">
            <h2 className='text-blue-500 text-4xl font-roboto font-full-bold'>Add Products Details</h2>
            <form onSubmit={step === 2 ? handleSubmit : undefined} className="form-container">
                {step === 1 && (
                    <div>
                        <label htmlFor="productName">Product Name:</label>
                        <input type="text" id="productName" value={prodInfo.productName} onChange={(e) => handleInputChange('productName', e.target.value)} required />
                        <button type="button" onClick={handleNextStep}>Next</button>
                    </div>
                )}
                {step === 2 && (
                    <div className="next-container">
                        <label htmlFor="actualPrice">Actual Price:</label>
                        <input type="number" id="actualPrice" value={prodInfo.actualPrice} onChange={(e) => handleInputChange('actualPrice', e.target.value)} min="0" step="0.01" required />
                        <label htmlFor="discountPrice">Discount Price:</label>
                        <input type="number" id="discountPrice" value={prodInfo.discountPrice} onChange={(e) => handleInputChange('discountPrice', e.target.value)} min="0" step="0.01" required />
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" value={prodInfo.description} onChange={(e) => handleInputChange('description', e.target.value)} rows="4" required></textarea>
                        <label htmlFor="images">Images:</label>
                        <input className="img-inpt" type="file" id="images" accept="image/*" onChange={handleImageChange} multiple required />
                        <button className="btn-sbmt" type="button" onClick={handlePrevStep}>Back</button>
                        <button type="submit">Submit</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default AddProduct;
