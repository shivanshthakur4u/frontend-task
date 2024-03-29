import Image from 'next/image'
import React from 'react'
import BgRed from "../../public/bg-dark-red.png"
import Button from './common/Button'
const WhatWeDo = () => {
    return (
        <div className="relative sm:h-[148dvh] h-[100dvh] flex flex-col gap-10 mt-8 sm:pl-16 pl-8 sm:pr-[72px] pr-8">
            <Image src={BgRed} className='absolute left-0 top-1  opacity-80' alt='bg-image-red' />
            <div className='flex justify-between gap-16 sm:gap-0 sm:pt-[250px] pt-[130px]'>
                <div className='flex flex-col gap-6  z-30'>
                    <h2 className='text-white sm:pt-[66px] sm:leading-[131.97px] pt-7 sm:text-[99px] text-4xl font-bold'>
                        WHAT <br className='hidden sm:block' />WE DO.
                    </h2>
                    <p className='text-white sm:text-[35px] text-lg font-normal sm:leading-[44px] font-sans'>
                        We do lots of stuffs , basically <br className='hidden sm:block'/> adding value to your product .
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    {
                        Array(4).fill(null).map((_, index) => (
                            <div key={index} className='pl-3  sm:pr-[72px] pr-8 sm:py-8 py-6'>
                                <h2 className='sm:text-[62px] text-3xl font-normal sm:leading-[82.65px] 
                                tracking-[-0.5%] text-[#E62D2D]'>
                                    Digital Marketing
                                </h2>
                            </div>
                        ))
                    }
                    <div>
                        <Button text='VIEW ALL' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default WhatWeDo