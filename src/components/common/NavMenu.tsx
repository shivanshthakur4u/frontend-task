import React from 'react'
import { Sheet, SheetContent, SheetDescription } from '../ui/sheet'
import Button from './Button';

interface NavMenu {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showMenu: boolean;
}

const NavMenu = ({ setShowMenu, showMenu }: NavMenu) => {

    const MenuLinks = [
        {
            name: "Services",
            url: "/"
        },
        {
            name: "About Us",
            url: "/"
        },
        {
            name: "Blogs",
            url: "/"
        },
        {
            name: "Contact Us",
            url: "/"
        },

    ]
    return (
        <Sheet open={showMenu} onOpenChange={setShowMenu} >
            <SheetContent className='md:min-w-[550px] w-full bg-[#0d0d0d] border-none h-full p-0 '>
             <SheetDescription className='mt-[75px]'>
             <div className='min-h-[75dvh] flex items-center justify-start w-full'>
                 <div className='pt-12 pl-12 flex flex-col gap-5'>
                    {
                        MenuLinks?.map((link)=>(
                            <p className='px-4 py-1.5 text-[#E62D2D] menu-text font-fairPlay leading-[1.2] font-medium 
                            xl:text-[62px] text-[40px] ' key={link.name}>
                             {
                                link.name
                             }
                            </p>
                        ))
                    }
                    <Button text='BOOK A FREE MARKETING AUDIT'    />
                 </div>
             </div>
             </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default NavMenu