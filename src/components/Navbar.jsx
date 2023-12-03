import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {
    const [ nav, setNav ] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        {/* menu section */}
        <h1 className='w-full text-3xl font-bold'>Odontofresh.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Services</li>
            <li className='p-4'>Get an apointment</li>
        </ul>
        <div onClick={handleNav} className='cursor-pointer block md:hidden'>
            { !nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
        </div>
        {/* mobile menu section */}
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold m-4'>Odontofresh.</h1>
            <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-400'>Home</li>
                <li className='p-4 border-b border-gray-400'>About</li>
                <li className='p-4 border-b border-gray-400'>Services</li>
                <li className='p-4'>Get an apointment</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar