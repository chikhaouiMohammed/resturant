import React from 'react';
// import components
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';





const App = () => {
  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Reservation />
      </LocalizationProvider>
      <Footer />
      <div className='h-[380px] md:h-[370px]'></div>
    </div>
  );
};

export default App;
