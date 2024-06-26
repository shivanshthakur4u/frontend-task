import Link from 'next/link'
import React from 'react'

const LetsChat = () => {
    return (
        <div className='sm:-mt-[20dvh] sm:py-[72px] py-9 sm:pl-[72px] pl-8 
        sm:pr-[10px] pr-8 bg-[#171717]  xl:px-[7%] 2xl:px-[10.8%] 3xl:px-[15%] 
        4xl:px-[22%] 5xl:px-[32%] 6xl:px-[36.5%]'>
            <h1 className='sm:text-[99px] text-4xl font-[689] text-white sm:leading-[131.97px]'>
                Looking to drive<br />
                results? <Link href={"/"} className='text-[#E62D2D] underline decoration-2 underline-offset-8'>
                    Lets chat
                </Link>
            </h1>
        </div>
    )
}

export default LetsChat