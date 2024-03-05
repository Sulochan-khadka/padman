import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './sanitary.css';
import { useProductContext } from '../../context/productcontext';
import { Link, useParams } from 'react-router-dom';
import { useCartContext } from '../../context/cartcontext';

const API = 'http://localhost:8000/singleproduct';

const Sanitary = () => {
  const {addToCart}=useCartContext();
  const { isSingleLoading, getSingleProduct, singleProduct } = useProductContext();
  const [selectedImage, setSelectedImage] = useState('');
  
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  useEffect(() => {
    if (singleProduct && singleProduct.images && singleProduct.images.length > 0) {
      // Set the selected image to the first image of the product
      setSelectedImage(singleProduct.images[0]);
    }
    window.scrollTo(0,0);

  }, [singleProduct]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  if (isSingleLoading) {
    return <div>Loading...</div>;
  }

  if (!singleProduct) {
    return <div>Error: Product not found</div>;
  }

  return (
    <div className='product-container'>
      <div className="container-content">
        <div className='image-section'>
          <div className='small-img'>
            {singleProduct.images && singleProduct.images.map((image, index) => (
              <div key={index} className='one-box' onClick={() => handleImageClick(image)}>
                <img className='tab-img' src={`../../../server/uploads/${singleProduct.productName}/${image}`} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
          <img className='main-img' src={`../../../server/uploads/${singleProduct.productName}/${selectedImage}`} alt='Main' />
        </div>
        <div className='detail-section'>
          <h2 className='text-pink text-3xl font-roboto font-full-bold'>{singleProduct.productName}</h2>
          <span>Rating:</span>
          <div className='point-container'>
          <ul className='products-point'>
         <li> <p>Here's why 6 Lakh+ women love and trust our Sanitary Pads:</p></li>
         <li><p>No harmful chemicals*, No fragrance</p></li> 
         <li> <p> Dermatologically tested, Rash free*</p></li> 
         <li>  <p>  50% wider back, Leak proof</p></li>
          </ul>
          </div>
          <div className='purchase-border'></div>
          <div className='subscription-container'>
            <div className='price-section'>
              <p>36 Pads every 3 months</p>
              <span className='price-tag1 font-roboto'>₹{singleProduct.discountPrice}</span>
              <span className='price-tag2 pl-2 font-roboto text-sm line-through'>₹{singleProduct.actualPrice}</span>
            </div>
           <div className='subscribe'></div>
           <p className='subs  font-roboto'><Link to='/cart' onClick={()=>addToCart(singleProduct)}>SUBSCRIBE</Link></p>
          </div>
          
        </div>
       
      </div>
    </div>
  );
};

export default Sanitary;
