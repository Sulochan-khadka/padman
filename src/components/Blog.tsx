import React from 'react';
import blog1 from '../assets/blog-1.webp';
import blog2 from '../assets/blog-2.webp';
import blog3 from '../assets/blog-3.webp'
import blog4 from '../assets/blog-4.webp'
import './blog.css'

const blogItem=[
    {
   id:1,
   img:blog1,
   descrp:"On-the-go relief: Your guide to Cramp Comfort Heat Patches"
},
    {
   id:2,
   img:blog2,
   descrp:"A Parent’s Guide: Choosing the Right Sanitary Pad for Your Daughter"
},
    {
   id:3,
   img:blog3,
   descrp:"Understanding the female reproductive system"
},
    {
   id:4,
   img:blog4,
   descrp:"PCOS and its effects on acne"
}
]


const Blog = () => {
  return <div className='blog-container'>
    {
     blogItem.map((item)=>{
        return <div className='blog-item'>
            <img src={item.img} alt={item.id} className='blog-img'/>
            <p className='font-light text-gray-500 text-mm blog-para'>{item.descrp}</p>
            <div className='blog-btn' >READ MORE</div>
        </div>
     })
    }
  </div>;
};

export default Blog;
