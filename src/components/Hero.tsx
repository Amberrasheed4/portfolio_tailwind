import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'


const Hero = () => {
  return (
    <>
      <Navbar />

      <div className='w-full min-h-screen bg-black flex flex-col md:flex-row items-center'>
      <div data-aos="fade-left"></div>
        <div className='w-full md:w-1/2 flex justify-center items-center ata-aos="fade-left'>
          <Image 
            src='/profilepic.png' 
            alt='profile pic' 
            width={450} 
            height={450} 
            className='object-cover max-w-full max-h-full '
          />
        </div>

        
        <div className='w-full md:w-1/2 flex justify-center md:justify-start items-center'data-aos="zoom-in-up">
          <p className='text-4xl md:text-6xl text-center md:text-left font-bold text-white data-aos="zoom-in-down '>
           Hey This is<br /> <br /> Amber Rasheed
           </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
