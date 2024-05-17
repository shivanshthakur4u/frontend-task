import React from 'react';
import Card from './common/Card';
import TestimonialCardSlider from './TestimonialCardSlider';

const Testimonial = () => {

  return (
    <div className='flex flex-col sm:gap-20 gap-8 sm:pt-[120px] pt-[100px] relative sm:h-[145dvh] h-[90dvh]
    6xl:h-[70dvh] 5xl:h-[78dvh] 4xl:h-[95dvh] 3xl:h-[90dvh] '>
      <div className='bg-red-3 '></div>
      <h1 className='text-[#E62D2D] sm:text-[99px] text-4xl font-[689] sm:leading-[131.97px] tracking-[-1.5%] 
      xl:px-[7%] 2xl:px-[10.8%] 3xl:px-[15%] sm:px-[72px] px-8 4xl:px-[22%] 5xl:px-[32%] 6xl:px-[36.5%] 
      '>
        Testimonials
      </h1>

      <TestimonialCardSlider />
    </div>
  );
};

export default Testimonial;
