const cartreducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        const { singleProduct } = action.payload;
        
        // Check if the product already exists in the cart
        const existingItem = state.cart.find(item => item.id === singleProduct._id);

        if (existingItem) {
            // If it exists, you can update the quantity or take any other action
            // For example, updating the quantity
            const updatedCart = state.cart.map(item => {
                if (item.id === singleProduct._id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1 // Update the quantity
                    };
                } else {
                    return item;
                }
            });

            return {
                ...state,
                cart: updatedCart
            };
        } else {
            // If it doesn't exist, add it to the cart
            const cartProduct = {
                id: singleProduct._id,
                name: singleProduct.productName,
                price: singleProduct.discountPrice,
                images: singleProduct.images[0],
                actualprice:singleProduct.actualPrice,
                quantity: 1 // Set initial quantity to 1
            };

            return {
                ...state,
                cart: [...state.cart, cartProduct]
            };
        }
    }

    if (action.type === "REMOVE_ITEM") {
        const updatedCart = state.cart.filter(curItem => curItem.id !== action.payload);
        return {
            ...state,
            cart: updatedCart
        };
    }
    if(action.type === "CLEAR_ITEM"){
        return{
            ...state,
            cart:[],
        }
    }
    if(action.type === "RESET_CART"){
        return{
            ...state,
            cart:[],
        }
    }

    if(action.type === "CART_TOTAL_PRICE"){
        let total_price=state.cart.reduce((initialVal,curElem)=>{
            let{price}=curElem;
            initialVal=initialVal+price;

            return initialVal
        },0)
        return{
            ...state,
            total_price,
        }
    }

    if(action.type === "CART_TOTAL_ITEM"){
        let updatedVal=state.cart.reduce((initialVal,curElem)=>{
            
            return initialVal+1;
        },0)
        return{
          ...state,
           total_item: updatedVal
        }
    }

    if(action.type==="FETCH_CART_ITEMS"){
        return{
            ...state,
            cart:action.payload
        }
    }

    return state;
};


   

export default cartreducer;
