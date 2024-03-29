import Image from 'next/image';
import BgBlue from "../../public/bg-blue.svg";
import BgRed from "../../public/bg-red.svg";
import Button from './common/Button';
const HeroSection = () => {
    return (
        <div className="relative sm:h-[108dvh] h-[60dvh] flex flex-col gap-10 sm:px-0 px-8 items-center justify-center">
            <Image src={BgBlue} className='absolute sm:left-0 -left-24 sm:top-1 top-10 rotate-90 opacity-80 sm:h-[90%] h-[30%] 2xl:w-[50%]' alt='bgblue' />
            <Image src={BgRed} className='absolute sm:right-0 -right-20 sm:top-9 rotate-90 opacity-80 sm:h-[95%] h-[40%] 2xl:w-[60%]' alt='bgred' />
            <div className="text-center flex flex-col gap-8 z-30">
                <h1 className="sm:text-[99px] text-[36px] font-bold text-white md:leading-[131.97px]">
                    We are Extensive.
                </h1>
                <p className=" text-white sm:text-5xl text-[24px] sm:leading-[65.32px]">
                    Helping you stand out in a <span className='text-[#FF4E4E]'>
                        crowded market</span> Helping
                    <br className='hidden md:block' /> you stand out in a crowded market
                </p>

            </div>
          <div className='cursor-pointer z-50'>
          <Button text='BOOK A FREE MARKETING AUDIT' />
          </div>
        </div>

    );
}

export default HeroSection;
