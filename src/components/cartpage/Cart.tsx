import { useCartContext } from "../../context/cartcontext";
import './cart.css'
import CartItem from "./CartItem";
import coupons from '../../assets/coupons.png'

const Cart=()=>{
    const {cart,clearItem,total_price}=useCartContext();
    console.log(cart)

  if(cart.length === 0){
    return <div>
       <h3>No Item in Cart</h3>
    </div>
  }

  return(
    <div className="main-container">
    <div className="cart-container">
        <div className="cart-container-headings">
            <p>Product</p>
            <p>Price</p>
            <p>SubTotal</p>
            <p>Remove</p>
        </div>
        <hr/>
    <div className="cart-item">
  {
    cart.map((curItem)=>{
        return <CartItem key={curItem.id} {...curItem} />
    })
  }

    </div>
    
      <button className="clr-btn" onClick={clearItem}>Clear Item</button>

      </div>
    <div className="bill-section">
       <div className="bill-header">
        <h1 className='text-lightpink-500 text-2xl font-roboto font-semi-bold'>Bill Details</h1>
        <div className="inside-header">
        <div className="item-total">
          <span>Item total</span>
          <span>₹{total_price}</span>
        </div>
        <div className="item-total">
          <span>Discount applied:</span>
          <span>-₹0</span>
        </div>
        <hr/>
        <div className="total">
          <span>Total Amount:</span>
          <span>₹{total_price}</span>
        </div>
       </div>
       </div>
      <div className="coupan-section">
        <span><img src={coupons} className="coup-img"/></span>
        <div className="coupan-content">
          <span>Apply Coupon Code</span>
          <span className="small_text">View coupons available for this cart</span>
        </div>
      </div>
      <div className="pincode-section">
        Estimated Delivery Date
        <div className="input-box">
        <input type="text" placeholder="Enter Pincode"></input>
        <span>Check</span>
        </div>
      </div>

      <div className="proceed-section font-roboto">
        <span>₹{total_price}</span>
        <span>Proceed</span>
      </div>


      
    </div>  
    </div>
   
  )

}

export default Cart;