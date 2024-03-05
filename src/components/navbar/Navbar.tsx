import React,{useEffect, useState} from "react";
import { Link,useNavigate} from "react-router-dom";
import './navbar.css'
import logo from '../../assets/Logo 2.png'
import { FaCartShopping } from "react-icons/fa6";
import { useCartContext } from "../../context/cartcontext";
import axios from "axios";

const Navbar = () => {
   const {total_item,fetchCartItems}=useCartContext();
   const [userdata,setUserdata]=useState({});
    const {cart,resetCart}=useCartContext();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const Navigate=useNavigate()
    const handleSignOut = () => {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      Navigate('/');
      resetCart();
    };

 
  const getUser = async() => {
    axios.get("http://localhost:8000/login/success",{withCredentials:true})
        .then(response => {
          console.log(response.data)
            setUserdata(response.data.user); 
           // Assuming response.data contains the user data directly
        })
        .catch(error => {
            console.error(error);
        });
};

useEffect(() => {
    getUser();
}, []);



  return (
    <div className='flex align-middle justify-between px-4 p-5'>
      <Link to='/'><div className="logo"><img src={logo}/></div></Link>
      {/* container */}
      <div className='flex justify-center align-middle px-8'>
        {/* <div className='px-4'>Sanitary Pads</div> */}
        <div className='px-4'>Our products</div>
        <div className='px-4'>Shop By Concern</div>
        <div className='px-4'>Combos & Extras</div>
        <div className='px-4'>Refer and Earn</div>
      <Link to='./addproduct'> <div className='px-4'>Add Products</div></Link> 
      </div>
      {/* login and chat */}
      <div className='flex align-middle justify-center'>
        
       <Link to='/cart'> <FaCartShopping size={40} className="cursor-pointer"/></Link>
        <div className="counter">
          {/* {cart.length} */}
          {total_item}
          
        </div>
       


        { isLoggedIn?(
          <div className='px-4' onClick={handleSignOut}><Link to='/'>Sign out</Link></div>
        ):(
          <div className='px-4'><Link to='/login'>login</Link></div>
        )

        }
        <div>chat</div>
      </div>
    </div>
  );
};

export default Navbar;
