 
import React from 'react';
import img1 from '../assets/tile-d-2.webp'
import img2 from '../assets/tile-d-3.webp'
import './offers.css'
import Slider from 'react-slick'
import Nextarrow from './Nextarrow';
import Prevarrow from './Prevarrow';
 

const offerList=[
    {
    id:1,
    img:img1
},
    {
    id:2,
    img:img2
},
    {
    id:3,
    img:img1
}
]
const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Nextarrow/>,
    prevArrow: <Prevarrow />
  };

const Offers = () => {
  return <div className='offer-container'>
    <Slider {...settings}>
     { offerList.map((item)=>{
        return <div className='offer-item'>
               <img src={item.img} className='offer-img'/> 
        </div>
      })}
    </Slider>
  </div>;
};

export default Offers;
