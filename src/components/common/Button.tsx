import React from 'react'

interface ButtonProps {
    text:string;
}

const Button = ({text}:ButtonProps) => {
    return (
        <button 
            className='bg-[#E62D2D] sm:px-9 px-5 sm:py-5 py-3 sm:rounded-xl rounded-[8px] font-sans hover:cursor-pointer sm:w-auto w-full'
            style={{ cursor: 'pointer' }}>
            <p className='text-[#e2daeb] sm:text-white sm:font-medium font-normal md:text-lg text-[15px] sm:tracking-[1.2] tracking-[1]'>
                {text}
            </p>
        </button>
    )
}

export default Button