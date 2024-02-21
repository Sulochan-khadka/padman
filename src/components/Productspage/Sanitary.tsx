import React,{useEffect, useState} from 'react';
import Footer from '../footer/Footer';
import axios from 'axios';
import padsimg from '../../assets/sanitary-pads_28Mar_1_600w.webp'
import './sanitary.css'
import small1 from '../../assets/small1.webp'
import small2 from '../../assets/small2.webp'
import small3 from '../../assets/small3.webp'


 

const Sanitary= () => {
  const [selectedImage, setSelectedImage] = useState(padsimg);
  const [sanitaryData, setSanitaryData] = useState(null);




  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className='product-container'>
       <div className="container-content">
         <div className='image-section'>
           <div className='small-img'>
            <div className='one-box' onClick={() => handleImageClick(small1)}>
              <img className='tab-img' src={small1}/>
            </div>
            <div className='one-box' onClick={() => handleImageClick(small2)}>
            <img className='tab-img' src={small2}/>
            </div>
            <div className='one-box' onClick={() => handleImageClick(small3)}>
            <img className='tab-img' src={small3}/>
            </div>
           </div>
           <img className='main-img' src={selectedImage} alt='image'/> 
         </div>
         <div className='detail-section'>
           <h2 className='text-pink text-3xl font-roboto font-full-bold'>Ultra-Safe Sanitary Pads</h2>
           <span>Rating:</span>
           <p>Here's why 6 Lakh+ women love and trust our Sanitary Pads:</p>
           <p>No harmful chemicals*, No fragrance</p>
           <p> Dermatologically tested, Rash free*</p>
           <p>  50% wider back, Leak proof</p>
           <div className='purchase-border'></div>
         </div>
       </div>
    </div>
    
  );
};

export default Sanitary;
