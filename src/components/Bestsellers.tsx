import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'




const Bestsellers = ({ img }) => {
  const [productData, setproductData] = useState(null);

  useEffect(()=>{
    axios.get('http://localhost:8000/addproduct')
    .then(response=>{
       setproductData(response.data)
      //  const productDetails=response.data;
      console.log(productData);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  },[])

  return (
   
    <div>
      
      <div className=' w-65 flex flex-col border border-1 border-gray-300 rounded-lg'>
        {/* <div className='h-60 w-60 rounded-t-lg'> */}
        <img
          src={img}
          alt=''
          className='h-60 rounded-t-lg'
          style={{ width: '300px' }}
        />
        {/* </div> */}
        <div className='pl-2'>
          <div className='py-2'>Ultra Safe Sanitary Pads</div>
          <div className='flex'>
            <div className=' text-lightpink font-roboto text-sm line-through'>
              ₹717
            </div>
            <div className='pl-2 text-lightpink font-roboto text-md'>₹549</div>
          </div>
          <div className='font-light text-gray-500 text-xs'>
            - 9 XL+, 15 XL, 12 L Pads
          </div>
          <div className='font-light text-gray-500 text-xs pb-10'>
            - 36 Secure Shield Covers
          </div>
          <div className='font-light text-gray-500 text-xs italic pb-10'>
            Made safe certified, 100% toxic free, safe on skin
          </div>
        </div>
        <div className='h-10 bg-lightpink rounded-b-lg flex justify-center items-center text-white font-roboto text-sm'>
          Add to Cart
        </div>
      </div>
      <Link to='/sanitary-pad'> <div className='h-10 text-lightpink font-roboto text-md flex justify-center items-center font-roboto text-sm'>
        Quick View
      </div>
      </Link>
    </div>
   
  );
};

export default Bestsellers;
