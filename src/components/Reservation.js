import React, { useState } from 'react';
import { reservationData } from '../data';
import 'react-datepicker/dist/react-datepicker.css';
import '../timepicker.css';
import { FaCalendar, FaClock, FaTiktok, FaUser, FaUsers } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';




const Reservation = () => {
  const { title, subtitle, modelImg, btnText } = reservationData;
  const [startDate, setStartDate] = useState(new Date());
  const [timeValue, setTimeValue] = useState('10:00');

  return (
    <section className='relative top-96 z-30 pb-20 lg:pb-[100px]'>
      <div className='container mx-auto'>
        {/* Text */}
        <motion.div 
        variants={staggerContainer}
        initial='hidden'
        whileInView={'show'}
        className=' text-center'>
          <motion.h2 variants={fadeIn('up','tween', 0.2, 1.6)} className='h2 capitalize'>{
          title}
          </motion.h2>
          <motion.p variants={fadeIn('up','tween', 0.4, 1.6)} className=' mb-8 text-dark'>{subtitle}</motion.p>
          <motion.div variants={fadeIn('up','tween', 0.6, 1.6)} className=' flex justify-center mb-8'>
            <img src={modelImg}/>
          </motion.div>
        </motion.div>
        
        {/* Form */}
        <motion.form variants={fadeIn('up','tween', 0.4, 1.6)} initial='hidden' whileInView={'show'}>
          <div className='flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8'>
            {/* DatePicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <div><FaCalendar /> </div>
                <div>Choose Date</div>
              </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* Time Picker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <div><FaClock/> </div>
                <div>Choose Time</div>
              </div>
              <TimePicker
              selected={timeValue}
              onChange={() => setTimeValue('10:00')}
              />
            </div>
            {/* Personenumber */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <div><FaUsers /> </div>
                <div>How many people?</div>
              </div>
              <TextField id="outlined-basic" placeholder='1' variant="outlined" />
            </div>
          </div>
          {/* Button */}
          <div className=' max-w-[316px] mx-auto flex justify-center'>
            <button className='btn capitalize w-full lg:w-auto'>{btnText}</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;
