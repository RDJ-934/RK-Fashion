import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { IoMdArrowForward } from 'react-icons/io';
import { Fitrash2 } from 'react-icons/fi';

import CartItem from '../components/CartItems';
import { SidebarContext } from '../contexts/SidebarContext';

import { CartContext } from '../contexts/CartContext';
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  // const { cart }= useContext(CartContext);
  return (<div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white h-full fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex justify-between items-center py-6 border-b'>
      <div className='uppercase font-semibold text-sm'>
        Cart (0)
      </div>
      <div onClick={(handleClose)} className='cursor-pointer flex justify-center items-center w-8 h-8'>
        <IoMdArrowForward className='text-2xl' />
      </div>
    </div>
     {/* <div>
      {cart.map((item) => {
        return <div>Cart Items</div>
      })}
     </div> */}
  </div>
  );
};

export default Sidebar;