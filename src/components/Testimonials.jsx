import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "framer-motion"

const Testimonials = () => {
    return (
        <motion.div 
             initial={{opacity: 0, x:200}}
             transition={{duration: 1}}
             whileInView={{opacity: 1, x:0}}
             viewport={{once: true}}
             className='container mx-auto py-10 px-6 md:px-20 lg:px-28 w-full overflow-hidden' id='Testimonials'>
            <h1 className='text-center text-2xl sm:text-4xl font-bold mb-2'>Customer
                <span className='underline underline-offset-4 decoration-1 under font-light ml-1'>Testimonials</span></h1>
            <p className='text-center text-gray-500 max-w-80 mb-8 mx-auto'>Outstanding service and results that truly exceeded our expectations.</p>
            <div className='flex flex-wrap justify-center gap-4'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-85 rounded-lg shadow-lg px-8 py-12 text-center'>
                        <img src={testimonial.image} alt={testimonial.name}
                            className='w-20 h-20 rounded-full mx-auto mb-4' />
                        <h2 className='text-xl font-medium text-gray-700'>{testimonial.name}</h2>
                        <p className='text-gray-500 text-sm'>{testimonial.title}</p>
                        <div className='flex gap-1 justify-center mt-2 mb-4 text-red-500'>
                            {Array.from({ length: testimonial.rating }, (item, index) => (
                                <img className="" key={index} src={assets.star_icon} alt="" />
                            ))}
                        </div>
                        <p className='text-gray-600'>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonials
