import React from 'react';
import BeachHotel from '../assets/beachHotel.jpg';
import Hotel from '../assets/hotel2.jpg';
import Beach from '../assets/beach.jpg';
import CurieParty from '../assets/cruieParty.jpg';
import Interior from '../assets/interior.jpg'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src={BeachHotel} alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={Hotel} alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={Beach} alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={CurieParty } alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={Interior} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Gallery
