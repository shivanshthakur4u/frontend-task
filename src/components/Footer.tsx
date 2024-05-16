import Link from 'next/link'
import React from 'react'
import FacebookIcon from "../../public/Facebook.svg"
import TwitterIcon from "../../public/Twitter.svg"
import InstagramIcon from "../../public/Instagram.svg"
import Image from 'next/image'
const Footer = () => {
    const FooterNavLink = [
    //     {
    //     name: "Home page",
    //     url: "/"
    // },
    {
        name: "About us",
        url: "/"
    },
    {
        name: "Book  Audit",
        url: "/"
    },
    {
        name: "Contact Us",
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
        <footer className='md::py-20 sm:py-12 py-8  bg-[#171717] mt-4 flex flex-col gap-4 
        xl:px-[7%] 2xl:px-[10.8%] 3xl:px-[15%] 
        4xl:px-[22%] 5xl:px-[32%] 6xl:px-[36.5%]'>
            <div className='flex justify-between flex-col md:items-center items-start md:flex-row'>
                <div className='text-start m-4 pb-6 sm:pb-0'>
                    <Link href={"/"}>
                        <h4 className='text-white text-4xl md:text-5xl font-normal 
                        leading-tight md:leading-normal tracking-wider'> Logo</h4>
                    </Link>
                </div>
                <div className='grid sm:grid-cols-5 grid-cols-2  gap-x-9 gap-y-5 sm:gap-8 sm:px-0 px-4'>
                    {
                        FooterNavLink?.map((nav, index) => (
                            <Link href={nav?.url} key={`${nav?.name}${index}`}
                            className='text-white font-fairPlay sm:text-xl text-[22px] font-medium leading-normal tracking-wide'>
                                {nav?.name}
                            </Link>
                        ))
                    }
                </div>
                <div className='flex gap-4 relative  sm:mt-0 mt-4 items-center justify-center self-center py-5'>
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
