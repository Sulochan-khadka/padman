import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import img1 from '../../server/uploads/Ultra-safe Sanitary pads/sanitarypads1.webp'
import { useCartContext } from '../context/cartcontext';
import { useProductContext } from '../context/productcontext';

// import { useProductContext } from '../context/productcontext';

const Bestsellers = (curItem) => {
  const {addToCart}=useCartContext();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  

  const{_id,productName,actualPrice,discountPrice,description,images}=curItem;
  // const {isLoading,products}=useProductContext()
  // console.log(products)
  // const [productData, setproductData] = useState(null);

  // useEffect(()=>{
  //   axios.get('http://localhost:8000/addproduct')
  //   .then(response=>{
  //      setproductData(response.data)
  //     //  const productDetails=response.data;
  //     console.log(productData);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   });
  // },[])
  // console.log(_id)

  return (
   
    <div>
      
      <div className=' w-65 flex flex-col border border-1 border-gray-300 rounded-lg'>
        {/* <div className='h-60 w-60 rounded-t-lg'> */}

        <Link to={`/singleproduct/${_id}`}><img
          src={`../../server/uploads/${productName}/${images[0]}`}
          // {`../../server/uploads/productName/${images[0]}`}
          alt={productName}
          className='h-60 rounded-t-lg'
          style={{ width: '300px' }}
        /> </Link>
        {/* </div> */}
        <div className='pl-2'>
          <div className='py-2'>{productName}</div>
          <div className='flex'>
            <div className=' text-blue-500 font-roboto text-sm line-through'>
            ₹{actualPrice}
            </div>
            <div className='pl-2 text-blue-500 font-roboto text-md'>₹{discountPrice}</div>
          </div>
          <div className='font-light text-gray-500 text-xs'>
            {description}
          </div>
          <div className='font-light text-gray-500 text-xs pb-10'>
            
          </div>
          <div className='font-light text-gray-500 text-xs italic pb-10'>
            Made safe certified, 100% toxic free, safe on skin
          </div>
        </div>
        <Link to='/cart' onClick={()=>addToCart(curItem)}><div className='h-10 bg-blue-500 rounded-b-lg flex justify-center items-center text-white font-roboto text-sm'>
          Subscribe
        </div></Link>
      </div>
      {
        isLoggedIn?( <Link to={`/singleproduct/${_id}`}> <div className='h-10 text-blue-500 font-roboto text-md flex justify-center items-center font-roboto text-sm'>
        Quick View
      </div>
      </Link>):(<Link to='/login'> <div className='h-10 text-blue-500 font-roboto text-md flex justify-center items-center font-roboto text-sm'>
        Quick View
      </div>
      </Link>)
      }
      
    </div>
   
  );
};

export default Bestsellers;
