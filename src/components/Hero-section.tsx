// import Image from 'next/image';
// import BgBlue from "../../public/bg-blue.svg";
// import BgRed from "../../public/bg-red.svg";
import Button from './common/Button';
const HeroSection = () => {
    return (
        <div className='flex flex-col relative w-full min-h-[100dvh] items-center justify-center hero_section'>
            {/* <Image src={BgBlue} alt='bg-blue' className='top-0 absolute  left-0 rotate-[37.5] bottom-60'/> */}
            <div className='bg-blue'></div>
            <div className='bg-red'></div>
            {/* <Image src={BgRed} alt='bg-red' className=' absolute right-0 top-24 rotate-180'  /> */}
            <h1 className='hero_section_heading text-center sm:mt-6'>
                We are Extensive.
            </h1>
            <p className='hero_section_sub_heading text-white text-wrap max-w-[1151px] text-center w-full'>
                Helping you stand out in a <span className='text-[#FF4E4E]'>
                    crowded market</span> Helping <br className='sm:block hidden'/> you stand out in a crowded market
            </p>
            <Button text='BOOK A FREE MARKETING AUDIT ' />
        </div>
    );
}

export default HeroSection;
