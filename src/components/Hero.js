import React from 'react';
import {Link} from 'react-router-dom';
import ManImg from '../images/Men.png';
const Hero = () => {
  return <section className='bg-slate-50 h-[500px] py-24 mt-20'>
    <div className='container mx-auto flex justify-around h-full'>
      <div className='hidden lg:block'>
        <img src={ManImg} alt=''/>
      </div>
    </div>
  </section>;
};

export default Hero;