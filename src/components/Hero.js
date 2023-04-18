import React from 'react';
import ManImg from '../images/Men.png';
const Hero = () => {
  return <section className='bg-slate-50 h-[650px] py-24 mt-20'>
    <div className='container mx-auto flex justify-around h-full'>
      <div className='hidden lg:block'>
        <img className='w-[750px] h-[400px] mt-[50px]' src={ManImg} alt=''/>
      </div>
    </div>
  </section>;
};

export default Hero;