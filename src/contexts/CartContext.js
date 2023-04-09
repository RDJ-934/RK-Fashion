import React,{ useEffect, createContext, useState} from 'react';

export const CartContext= createContext(); 

const CartProvider = ({children}) => {
  const {cart, setCart}= useState([]);

  const addToCart = (product, id)=>{
        const newItem={...product, amount: 1};

        const cartItem = cart.find(item =>{
            return item.id === id;
        });
        console.log(cartItem);
  };
  return <CartContext.Provider value={{addToCart}}>{children}</CartContext.Provider>;
};

export default CartProvider;