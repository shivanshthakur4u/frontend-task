import React from 'react'
import Button from './common/Button'

const WhoWeAre = () => {
    return (
        <div className='sm:mt-[220px] mt-[40px] sm:px-[72px] px-8 flex flex-col gap-5 
         xl:mx-[7%] 2xl:mx-[10.8%] 3xl:mx-[15%] 4xl:mx-[22%] 5xl:mx-[32%] 6xl:mx-[35%] 2xl:mt-0 2xl:px-3'>
            <h4 className='text-white text-2xl font-normal '>
                WHO WE ARE
            </h4>
           <div className='flex flex-col'>
           <h3 className='text-[#E62D2D] sm:text-[99px] leading-[1.2] text-[40px] sm:leading-[131.97px] font-semibold'>
            We are Extensive.
            </h3>
            <p className='text-white font-sans font-normal sm:text-[35px] leading-[1.2] sm:mt-6 sm:mb-10 mt-2 mb-4 text-[17px] sm:leading-[44px]'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className='w-full'>
           <Button text='BOOK A FREE MARKETING AUDIT'/>
           </div>
           </div>
           
        </div>
    )
}

export default WhoWeAre