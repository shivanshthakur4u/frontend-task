import React from 'react'

interface ButtonProps {
    text:string;
}

const Button = ({text}:ButtonProps) => {
    return (
        <button 
            className='bg-[#E62D2D] sm:px-9 px-4 sm:py-5 p-4 rounded-xl font-sans hover:cursor-pointer sm:w-auto w-full'
            style={{ cursor: 'pointer' }}>
            <p className='text-white font-medium md:text-lg text-base tracking-[0.0125em]'>
                {text}
            </p>
        </button>
    )
}

export default Button