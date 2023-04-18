import React from 'react';

const Footer = () => {
  return <footer className='bg-slate-500 py-12'>
    <div className='container mx-auto gap-5 '>
      <form className=' flex flex-col gap-2' action='#' method='POST'>
      <input className='py-1 px-1 text-base w-[200px] ml-20'required type='text' placeholder='First Name'/>
      <input className='py-1 px-1 text-base w-[275px] ml-20' required type='email' placeholder='Enter E-mail'/>
      <textarea className='py-1 px-1 w-[400px] ml-20' cols={30} rows={6} required autoComplete="off" placeholder='Enter your Message'/>
      <button className='px-2 py-2 w-[100px] ml-20 bg-primary text-white hover:bg-black transition duration:200ns'>Submit</button>
      </form>

      <p className='text-white text-center '>Copyright &copy; E-commerce Shop 2023. All Right Reserved</p>
    </div>
  </footer>;
};

export default Footer;  