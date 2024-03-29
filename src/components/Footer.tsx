import Link from 'next/link'
import React from 'react'
import FacebookIcon from "../../public/Facebook.svg"
import TwitterIcon from "../../public/Twitter.svg"
import InstagramIcon from "../../public/Instagram.svg"
import Image from 'next/image'
const Footer = () => {
    const FooterNavLink = [{
        name: "Home page",
        url: "/"
    },
    {
        name: "About us",
        url: "/"
    },
    {
        name: "Book  audit",
        url: "/"
    },
    {
        name: "Contact us",
        url: "/"
    },
    {
        name: "Our services",
        url: "/"
    },
    {
        name: "Blogs",
        url: "/"
    }
    ]

    const FooterSocialIcons = [
        {
            label: "Instagram",
            Icon: InstagramIcon,
            url: "/"
        },
        {
            label: "Facebook",
            Icon: FacebookIcon,
            url: "/"
        },
        {
            label: "Twitter",
            Icon: TwitterIcon,
            url: "/"
        }
    ]

    return (
        <footer className='md::p-20 sm:p-12 p-8  bg-[#171717] mt-4 flex flex-col gap-8'>
            <div className='flex justify-between flex-col items-center md:flex-row'>
                <div className='text-center md:text-left'>
                    <Link href={"/"}>
                        <h4 className='text-white text-4xl md:text-5xl font-normal leading-tight md:leading-normal tracking-wider'> Logo</h4>
                    </Link>
                </div>
                <div className='flex flex-col md:flex-row gap-4 md:gap-12 sm:mt-0 mt-4'>
                    {
                        FooterNavLink?.map((nav, index) => (
                            <Link href={nav?.url} key={`${nav?.name}${index}`}
                            className='text-white text-lg md:text-xl font-medium leading-normal tracking-wide'>
                                {nav?.name}
                            </Link>
                        ))
                    }
                </div>
                <div className='flex gap-4 relative  sm:mt-0 mt-4'>
                    {
                        FooterSocialIcons.map((social, index) => (
                            <Link href={social?.url} key={index}>
                                <Image src={social?.Icon} alt={social?.label} />
                            </Link>
                        ))
                    }
                </div>
            </div>
            {/* copyright */}
            <p className='text-[13px] font-medium text-white leading-[16.34px] tracking-[0.4%] self-center font-sans'>
                Copyright@2023
            </p>
        </footer>
    )
}

export default Footer