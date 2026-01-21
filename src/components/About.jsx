import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='container flex flex-col justify-center items-center
    mx-auto py-10 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About
         <span className='underline underline-offset-4 decoration-1 under font-light ml-1'>Our Brand</span></h1>
      <p className='text-center text-gray-500 max-w-80 mb-8'>Learn more about our company and what we stand for.</p>
      <div className='flex flex-col md:flex-row items-center md:items-start
      md:gap-20'>
            <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg p-3 md:p-0' />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='text-center md:text-start grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                     <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                     <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                     <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg text-center md:text-start'>Explore the best real estate opportunities with our user-friendly platform. Whether you’re buying, selling, or investing, we provide trusted listings, expert advice, and seamless tools to help you find your
                dream home or make smart property investments with confidence 
                and ease.</p>
                <button className='bg-blue-600 text-white px-8 py-2'>Learn more</button>
            </div>
      </div>
    </div>
  )
}

export default About
