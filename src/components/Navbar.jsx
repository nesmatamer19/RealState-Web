import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'

function Navbar() {
    const [showmobilemenu, setshowmobilemenu] = useState(false);

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img src={assets.logo} alt="logo" />
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#Header" className='cursor-pointer hover:text-gray-500'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-500'>About</a>
                    <a href="#Projects" className='cursor-pointer hover:text-gray-500'>Projects</a>
                    <a href="#Testmonials" className='cursor-pointer hover:text-gray-500'>Testimonials</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
                <img onClick={() => setshowmobilemenu(true)} src={assets.menu_icon} className='cursor-pointer md:hidden w-7' alt="" />
            </div>
            <div className={`md:hidden ${showmobilemenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 
            bg-white transition-all bottom-0 overflow-hidden`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img onClick={() => setshowmobilemenu(false)} src={assets.cross_icon} className='w-6' alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a href="#Header" className='px-4 py-2 rouned-full inline-block'>Home</a>
                    <a href="#About" className='px-4 py-2 rouned-full inline-block'>About</a>
                    <a href="#Projects" className='px-4 py-2 rouned-full inline-block'>Projects</a>
                    <a href="#Testimonials" className='px-4 py-2 rouned-full inline-block'>Testimonials</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
