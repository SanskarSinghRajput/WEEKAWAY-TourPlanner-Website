import React from 'react'
import ResortImg from '../assets/resorts.jpg';
import CruiseImg from '../assets/CruiseImg.jpg';
import Excursion from '../assets/Excurion.jpg';

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto h-full w-full md:flex mt-[-75px]'>
      <div className='relative p-4'>
         <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
         <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
            src={ResortImg} 
            alt="/" 
         />
      </div>
      <div className='relative p-4'>
         <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruise</h3>
         <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
            src={CruiseImg} 
            alt="/" 
         />
      </div>
      <div className='relative p-4'>
         <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Excursion</h3>
         <img 
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
            src={Excursion} 
            alt="/" 
         />
      </div>
    </div>
  )
}

export default Activities
