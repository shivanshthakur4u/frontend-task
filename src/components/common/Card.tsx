import Image from 'next/image'
import React from 'react'
import TestimonialImage from "../../../public/Testimonial.svg"
const Card = () => {
    return (
        <div className='bg-[#171717] rounded-[18px] sm:p-12 p-6 flex flex-col md:gap-0 gap-1 z-30'>
            <div className='relative flex md:gap-10 gap-2 md:flex-row flex-col md:justify-start 
            justify-center md:items-start  items-center'>
                <Image src={TestimonialImage} alt='testimonial-image' className='sm:w-[14%] w-[110px]' />
                <h2 className='sm:text-[62px] text-xl text-[#E62D2D] tracking-[-0.5%]
                font-normal sm:leading-[82.65px] md:text-start text-center'>“Working with Extensive is great” </h2>
            </div>
            <div className='flex sm:gap-9 gap-4 justify-end'>
                <div className='bg-[#E62D2D] h-0.5 sm:w-[161px] w-[40px] self-center' />
                <div className='flex flex-col'>
                    <h3 className='text-[#E62D2D] sm:text-[49px] text-2xl font-normal sm:leading-[65.32px]'>
                        Hershel
                    </h3>
                    <h5 className='text-[#FF6E6C] sm:text-[25px] text-xs font-normal sm:leading-[33.32px]'>
                        Head of director<br />
                        GGPL PVT LTD.
                    </h5>
                </div>
            </div>
            <div className='mt-16 self-center'>
                <div className='bg-[#E62D2D] sm:h-[18px] h-2 sm:w-[155px] w-[70px]  rounded-xl justify-center self-center' />
            </div>
        </div>
    )
}

export default Card