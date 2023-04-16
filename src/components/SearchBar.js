import React from 'react';
import { BsSearch } from 'react-icons/bs';

function SearchBar() {
  return (
    <div className=''>
        <div className='flex bg-white'>
            <input className='text-2xl focus:outline-none px-1' type='text' placeholder="Search.." />
            <div className='bg-neutral-200 text-2xl py-1 px-1 cursor-pointer text-blue'><BsSearch/></div>
        </div>
    </div>
  )
}

export default SearchBar