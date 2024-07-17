import React, { createContext, useState } from 'react';
import products from '../products';
export const ShopContext = createContext(null); 
const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < products.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
export const ShopContextProvider = (props) => {
    const [cartItem , setCartItem] = useState(getDefaultCart());
     
    const addToCart = (itemId)=>{
        console.log(cartItem)
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    }
    const contextValue={
        cartItem , 
        addToCart,
        removeFromCart
    };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
