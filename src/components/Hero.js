import React from 'react';
import Slider from './slider';
const Hero = () => {
  return <section className='bg-slate-50 h-[600px] py-18 mt-20'>
    <div className='container mx-auto flex justify-around '>
        <Slider/>
    </div>
  </section>;
};

export default Hero;