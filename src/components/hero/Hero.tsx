import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import img1 from '../../assets/carousel1.webp';
import img2 from '../../assets/carousel2.webp';
import img3 from '../../assets/carousel4.webp';
import Bestsellers from '../Bestsellers';
import product1 from '../../assets/product1.webp';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product-3.webp';
import product4 from '../../assets/product-4.webp';
import Offers from '../Offers';
import Doctor from '../Doctor';
import Blog from '../Blog';
import Footer from '../footer/Footer';
import { useProductContext } from '../../context/productcontext';



const Hero = () => {

  const {isLoading,products}=useProductContext()
  console.log(products)
  if(isLoading){
    return <div>loading...</div>
  }




  const slideImages = [
    {
      img: img1,
      caption: 'Slide 1',
    },
    {
      img: img2,
      caption: 'Slide 2',
    },
    {
      img: img3,
      caption: 'Slide 3',
    },
    // {
    //   img: img4,
    //   caption: 'Slide 4',
    // },
  ];

  return (<>
    <div className='flex flex-col justify-center px-20 '>
      {/* <div> */}
      <div className='py-1 text-blue-500 font-roboto text-lg'>
        The safest choice for over 1 million women
      </div>
      <div>
        <Slide autoplay={true} infinite={true} arrows={false}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                className='rounded-lg'
                style={{
                  backgroundImage: `url(${slideImage.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '300px', // Adjust the height as needed
                  width: 'auto',
                }}
              />
            </div>
          ))}
        </Slide>
      </div>
      <div className='py-10'>
        <div className='text-blue-500 font-roboto font-semi-bold text-2xl'>
          Bestsellers
        </div>
        <div className='font-light text-gray-500 text-sm'>
          Shop our most loved products
        </div>
      </div>
      <div className='flex justify-between pb-10'>
       {
        products.map((curItem)=>{

          return <Bestsellers key={curItem._id} {...curItem} />

        })
       }

        {/* <Bestsellers img={product1} /> */}
        {/* <Bestsellers img={product2} />
        <Bestsellers img={product3} />
        <Bestsellers img={product4} /> */}
      </div>
      <div>
        <div className='text-blue-500 text-2xl font-roboto font-semi-bold'>
          Website Exclusive Offers
        </div>
        <div className='font-light text-gray-500 text-sm'>
          Offers you won't get anywhere else
        </div>
        <div style={{width:'auto'}}>
        <Offers />
        </div>
        <div className='text-blue-500 text-2xl font-roboto font-semi-bold'>
         Instant Doctor Appointment
        </div>
        <div className='font-light text-gray-500 text-sm'>
        A community that will have your back!
        </div>
        <Doctor/>
        <div className='text-blue-500 text-2xl font-roboto font-semi-bold'>
        InSync - Nua Blog
        </div>
        <div className='font-light text-gray-500 text-sm'>
        Read expert articles, experience personal stories, and explore authentic content
        </div>
        <Blog />

      </div>
    </div>
     
    </>
  );
};

export default Hero;
