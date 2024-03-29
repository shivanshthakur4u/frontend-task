import React from 'react';
import Button from './common/Button';
import Image from 'next/image';
import StarBuck from "../../public/Starbuck.png";
import Nike from "../../public/Nike.png";

const OurWork = () => {
    return (
        <div className='w-full h-full flex flex-col sm:gap-10 gap-6 bg-[#171717] sm:mr-3 sm:px-[72px] px-8'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-white sm:text-[99px] sm:leading-[131.97px] text-4xl font-semibold pt-4'>
                    OUR <br /> WORK.
                </h2>
                <div>
                    <Button text='VIEW ALL' />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-6'>
                {/* Content items */}
                <ContentItem image={StarBuck} title="STARBUCKS" description="Our ad campaign brought 80% footfall to the company" />
                <ContentItem image={Nike} title="Nike" description="Our ad campaign brought 80% footfall to the company" />
                <ContentItem image={Nike} title="Nike" description="Our ad campaign brought 80% footfall to the company" />
                <ContentItem image={StarBuck} title="STARBUCKS" description="Our ad campaign brought 80% footfall to the company" />
            </div>
        </div>
    );
};

// ContentItem component
const ContentItem = ({ image, title, description }: { image: any, title: string, description: string }) => {
    return (
        <div className='flex flex-col gap-2.5 relative'>
            <Image src={image} alt='Image' className='border-[1px] border-[#E62D2D]' />
            <div className='flex flex-col gap-[14px]'>
                <h5 className='text-white sm:text-[17px] text-xs font-normal sm:leading-[21.37px] font-sans'>
                    DIGITAL MARKETING
                </h5>
                <h3 className='sm:text-[49px] text-2xl font-normal text-[#E62D2D] sm:leading-[65.32px]'>
                    {title}
                </h3>
                <h4 className='sm:text-[35px] text-lg font-normal md:pb-6 sm:leading-[44px] font-sans text-white'>
                    {description}
                </h4>
            </div>
        </div>
    );
};

export default OurWork;
