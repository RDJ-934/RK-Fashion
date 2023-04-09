import React,{useContext} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {BsCart} from 'react-icons/bs'
const Header = () => {
  const {isOpen, setIsOpen}= useContext(SidebarContext);
  return (
  <header className='bg-blue-200'>
     <div>Header</div>
     <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
      <BsCart className='text-2xl'/>
      </div>
  </header>
  );
};

export default Header;