import React from 'react'
import avenger from '../assets/avenger.jpg'

function Banner() {
  return (
    <div className='h-[40vh] md:h-[90vh] bg-cover flex items-end' style={{backgroundImage: `url(${avenger})`}}>
        <div className='text-white text-xl font-bold text-center w-full bg-gray-900/72 p-3'>Avengers: Endgame</div>
    </div>
  )
}

export default Banner