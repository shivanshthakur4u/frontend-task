import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuIcon from "../../public/menu.svg"
const Navbar = () => {

    const NavbarLiks = [{
        name: "Contact",
        url: "/contact"
    },
    {
        name: "Work",
        url: "/work"
    },
    ]
    return (
        <div className='bg-[#0D0D0D] flex justify-between md:pt-12 pt-8 md:px-[72px] px-8 md:pb-6 pb-4 w-full'>
            <Link href={"/"}>
            <div className='rounded-[17px] w-11 h-11 bg-[#E62D2D] cursor-pointer' />
            </Link>
            <div className='flex md:gap-12 gap-8 items-center'>
                {
                    NavbarLiks.map((navlink, index) => (
                        <Link href={navlink?.url} key={index}
                            className='text-[#D7CAED] md:text-[35px] text-lg font-normal leading-[46.66px]'>
                            {navlink?.name}
                        </Link>
                    ))
                }
                <div className=' cursor-pointer'>
                    <Image src={MenuIcon} width={44} height={44} alt={'menu-icon'} />
                </div>
            </div>
        </div>
    )
}

export default Navbar