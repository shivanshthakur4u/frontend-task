import React from 'react'
import Card from './common/Card'
import Image from 'next/image'
import BgRed from "../../public/bg-dark-red.png"
const Testimonial = () => {
  return (
    <div className='flex flex-col gap-20 sm:pt-[265px] pt-[100px] sm:px-[72px] px-8 relative sm:h-[160dvh] h-[80dvh]'>
        
      <h1 className='text-[#E62D2D] sm:text-[99px] text-4xl font-[689] sm:leading-[131.97px] tracking-[-1.5%]'> 
      Testimonials
      </h1>
      <Image src={BgRed} className='absolute left-0 bottom-0 sm:h-[70%] h-[20%]  opacity-50' alt='bg-image-red' />
      <Card />
    </div>
  )
}

export default Testimonial