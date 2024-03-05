import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartreducer';
import axios from "axios";

const CartContext= createContext();

const getLocalCartdata=()=>{
let localData =localStorage.getItem("CartItem");
if(localData===[]){
  return [];
}
else {
  return JSON.parse(localData);
}

}

const initialState={
    cart:getLocalCartdata(),
    total_item:"",
    total_amount:"",
    shipping_fee:50000,
}

const CartProvider=({children})=>{
   const [state,dispatch]=useReducer(reducer,initialState);

   const addToCart=(singleProduct)=>{
     dispatch({type:"ADD_TO_CART",payload:{singleProduct}});
   }

   const removeItem=(id)=>{
    dispatch({type:"REMOVE_ITEM",payload:id})
   }

   const clearItem=()=>{
    dispatch({type:"CLEAR_ITEM"})
   }
   const resetCart = () => {
    dispatch({ type: "RESET_CART" });
  };

  const fetchCartItems = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("/login/cart"); 
            console.log(response.data)
            dispatch({ type: "FETCH_CART_ITEMS", payload: response.data });
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };
};



   useEffect(()=>{
    dispatch({type:"CART_TOTAL_PRICE"});
    dispatch({type:"CART_TOTAL_ITEM"})
    localStorage.setItem("CartItem",JSON.stringify(state.cart))

   },[state.cart])


  return <CartContext.Provider value={{...state,addToCart,removeItem,clearItem,resetCart,fetchCartItems}}>{children}</CartContext.Provider>
};

const useCartContext=()=>{
    return useContext(CartContext);
}

export {CartProvider,useCartContext};