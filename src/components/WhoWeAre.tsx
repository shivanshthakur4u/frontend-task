import React from 'react'
import Button from './common/Button'

const WhoWeAre = () => {
    return (
        <div className='sm:mt-[250px] mt-[130px] sm:px-[72px] px-8 flex flex-col sm:gap-6 gap-5'>
            <h4 className='text-white text-2xl font-normal '>
                WHO WE ARE
            </h4>
            <h3 className='text-[#E62D2D] sm:text-[99px] text-[36px] sm:leading-[131.97px] font-semibold'>
            We are Extensive.
            </h3>
            <p className='text-white font-sans font-normal sm:text-[35px] text-lg sm:leading-[44px]'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
           <div className='sm:pt-9 pt-4'>
           <Button text='BOOK A FREE MARKETING AUDIT'/>
           </div>
        </div>
    )
}

export default WhoWeAre