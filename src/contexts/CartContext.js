import React, { useEffect, createContext, useState} from 'react';

export const CartContext= createContext(); 

const CartProvider = ({children}) => {
  const [cart, setCart]= useState([]);

  function addToCart(product, id) {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        }
        else {
          return item;
        }
      });
      setCart(newCart);
    }
    else {
      setCart([...cart, newItem]);
    }
  };

  const removefromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseamount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    addToCart(cartItem, id);
  };
  
  const decreaseamount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    if(cartItem) {
      const newCart = cart.map( item => {
        if(item.id === id) {
          return {...item, amount: cartItem.amount -1}
        }
        else{
          return item;
        }
      });
      setCart(newCart);
    }
      if(cartItem.amount < 2) {
        removefromCart(id);
    }
  };

    return (<CartContext.Provider value={{ cart , addToCart, removefromCart, clearCart, increaseamount, decreaseamount }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;