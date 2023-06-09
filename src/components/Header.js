import React,{useContext, useEffect, useState} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import SearchBar from '../components/SearchBar';
import {BsCart} from 'react-icons/bs'
import {Link} from 'react-router-dom';
import Logo from '../images/RK.png';



const Header = () => {
  const [isActive, setIsActive]= useState(false);
  const {isOpen, setIsOpen}= useContext(SidebarContext);
  const {itemAmount}= useContext(CartContext);


  useEffect(()=>{
    window.addEventListener('sroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false); 
    });
  });

  return (
  <header className={`${isActive? 'bg-orange-100 py-4 shadow-md': 'bg-orange-100 py-6'} fixed w-full z-10 transition-all`}>
    <div className='container mx-auto flex items-center justify-between'>

     <Link to={'/'}>
      <div>
        <img className='w-[80px]' src={Logo} alt="" />
      </div>
     </Link>

     <div><SearchBar/></div>
    
     <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
      <BsCart className='text-2xl'/>
      <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
        {itemAmount}
      </div>
      </div>
    </div>
  </header>
  );
};

export default Header;