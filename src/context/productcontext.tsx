import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/productReducer'

const AppContext = createContext();

const API = "http://localhost:8000/addproduct";

const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    isSingleLoading:false,
    singleProduct:{}
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: 'SET_LOADING' });

    try {
      const res = await axios.get(url);
      const products = res.data; // Extract products from the response data
      dispatch({ type: 'MY_API_DATA', payload: products }); // Dispatch products as payload
    } catch (error) {
      dispatch({ type: 'API_ERROR' });
    }
  }
  
  const getSingleProduct=async(url)=>{
    dispatch({ type: 'SET_SINGLE_LOADING' });
    try{
      const res = await axios.get(url);
      const singleProduct = res.data;
      console.log(res.data)
      
      dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct });

    }
    catch(error){
      dispatch({ type: 'SET_SINGLE_ERROR' });

    }
  }




  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state,getSingleProduct}}>
      {children}
    </AppContext.Provider>
  );
}

const useProductContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider, useProductContext };
