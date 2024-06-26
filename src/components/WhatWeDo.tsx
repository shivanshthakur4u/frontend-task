import Image from 'next/image'
import React from 'react'
import BgRed from "../../public/bg-dark-red.png"
import Button from './common/Button'
const WhatWeDo = () => {
    return (
        <div className="relative mb-20 flex flex-col gap-10 mt-3 
        sm:pl-16 pl-8 sm:pr-[72px] pr-8  xl:mx-[7%] 2xl:mx-[10.8%] 3xl:mx-[15%] 
        4xl:mx-[20%] 5xl:mx-[30%] 6xl:mx-[35%] 3xl:pl-0 3xl:pr-0 4xl:pl-0 4xl:pr-0 2xl:pl-0 2xl:pr-0">
            {/* <Image src={BgRed} className='absolute left-0 top-1  opacity-80' alt='bg-image-red' /> */}
            <div className='bg-red-2 '>

            </div>
            <div className='flex sm:justify-between sm:flex-row flex-col sm:pt-[250px] pt-[60px]'>
                <div className='flex flex-col  z-30'>
                    <h2 className='text-white sm:pt-[120px] sm:leading-[131.97px] mt-3 sm:text-[99px] px-3 mb-3
                     text-3xl sm:font-bold font-semibold leading-[1.2]'>
                        WHAT <br className='hidden sm:block' />WE DO.
                    </h2>
                    <p className='text-white sm:text-[35px] text-lg font-normal sm:leading-[44px] font-sans mb-3 px-3'>
                        We do lots of stuffs , basically <br className='hidden sm:block' /> adding value to your product .
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    {
                        Array(4).fill(null).map((_, index) => (
                            <div key={index} className='pl-3  sm:pr-[72px] pr-8 sm:py-8 sm:px-0 px-2'>
                                <h2 className='sm:text-[62px] text-[40px] font-bold sm:font-normal sm:leading-[82.65px] 
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