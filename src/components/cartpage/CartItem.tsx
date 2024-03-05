import './cart.css'
import { FaTrash } from 'react-icons/fa6';
import { useCartContext } from '../../context/cartcontext';


const CartItem=({id,name,price,images,actualprice})=>{
  const {removeItem}=useCartContext();
   
  return <div>
    <div className="item-container-headings">
       <div className='name-container'>
        <div className='prod-img'>
          <img src={`../../../server/uploads/${name}/${images}`}/>
          </div>
        {name}
        </div>
       <div className='price'>₹{price}</div>
       <div className='price'>₹{price}</div>
       <div className='price cursor-pointer'><FaTrash className='remove_icon' onClick={()=>removeItem(id)}/></div>
    </div>

  </div>

}

export default CartItem;