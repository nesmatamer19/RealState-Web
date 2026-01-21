import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id="Footer">
      <div className='flex container mx-auto flex-col md:flex-row justify-between
      items-center'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="" />
            <p className='text-gray-400 mt-4'>© 2026 Your Company Name. Delivering quality and excellence with every service. Connect with us and stay updated on our latest offerings.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#Header" className='cursor-pointer hover:text-white'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-white'>About Us</a>
                <a href="#ContactUs" className='cursor-pointer hover:text-white'>Contact Us</a>
                <a href="#Privacypolicy" className='cursor-pointer hover:text-white'>Privacy Policy</a>

            </ul>
        </div>
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The latest updates and offers delivered straight to your inbox.</p>
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter your email' 
                className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700
                focus:outline-none w-full md:w-auto'/>
                <button className=' bg-blue-500 text-white py-2 px-4 rounded'>Subscribe</button>
            </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2026. All Right Reserved
      </div>
    </div>
  )
}

export default Footer
