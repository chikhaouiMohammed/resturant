import React from 'react';

import TestimonialCarousel from '../components/TestimonialCarousel'

import { testimonialData } from '../data'
import { motion } from 'framer-motion';

import { fadeIn } from '../variants'
 

const Testimonial = () => {

  const {title, subtitle, modelImg, slider} = testimonialData

  return <section className=' bg-testimonial bg-cover bg-no-repeat relative top-[340px] lg:top-[390px] z-10 h-[800px] pt-[60px] md:pt-[120px] '>
    <div className=' container mx-auto'>
      {/* text */}
      <motion.div variants={fadeIn('up', 'tween',0.3, 1.6)} initial='hidden' whileInView={'show'} className=' capitalize text-center flex flex-col items-center'>
        <h2 className=' h2 text-white'>{title}</h2>
        <p className=' text-white/70 mb-8'>{subtitle}</p>
        <div className=' mb-12'>
          <img src={modelImg}></img>
        </div>
      </motion.div>
      {/* slider */}
      <motion.div 
      variants={fadeIn('up', 'tween',0.4, 1.6)} initial='hidden' whileInView={'show'} 
      className=' flex justify-center items-center'><TestimonialCarousel  slider={slider}/></motion.div>
    </div>
  </section>;
};

export default Testimonial;
