'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuIcon from "../../public/menu.svg"
import NavMenu from './common/NavMenu'
const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const NavbarLiks = [{
        name: "Contact",
        url: "/contact"
    },
    {
        name: "Work",
        url: "/work"
    },
    ]

  

    const handleClick = () => {
        setShowMenu(true)
    }
    return (
        <>
            <div className='bg-[#0D0D0D] flex justify-between  pt-8 md:px-[72px] px-8 md:pb-6 pb-4 w-full fixed z-50'>
                <Link href={"/"}>
                    <div className='rounded-[17px] w-11 h-11 bg-[#E62D2D] cursor-pointer ' />
                </Link>
                <div className='flex md:gap-12 gap-8 items-center '>
                    {
                        NavbarLiks.map((navlink, index) => (
                            <Link href={navlink?.url} key={index}
                                className='text-[#D7CAED] md:text-[35px] hidden sm:block text-lg font-normal leading-[46.66px]'>
                                {navlink?.name}
                            </Link>
                        ))
                    }
                    <div className='cursor-pointer'>
                        <Image src={MenuIcon} width={44} height={44} alt={'menu-icon'} onClick={handleClick} />
                    </div>
                </div>
            </div>
            <NavMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
        </>
    )
}

export default Navbar