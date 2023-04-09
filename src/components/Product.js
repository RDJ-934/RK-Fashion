import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;
  return <div>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        {/* Image */}
        <div className='w-[250px] mx-auto flex justify-center items-center'>
          <img className='max-h-[170px] group-hover:scale-110 transition duration-300' src={image} alt='' />
        </div>
      </div>
      <div className='absolute top-0 -right-11 group-hover:right-2 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
        <button onClick={() => addToCart(product, id)}>
          <div className='flex justify-center items-center w-8 h-8 text-white bg-red-400'>
            <BsPlus className='text-3xl' />
          </div>
        </button> 
        <Link to={`/product/${id}`} className='w-8 h-8 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
          <BsEyeFill />
        </Link>
      </div>
    </div>
    <div>
      <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
      <Link to={`/product/${id}`}>
        <h1 className='font-semibold mb-1'>{title}</h1>
      </Link>
      <h2 className='font-semibold'> $ {price}</h2>
    </div>
  </div>;
};

export default Product;