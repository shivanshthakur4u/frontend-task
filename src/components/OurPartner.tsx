// import React from 'react'
// import Pinterest from "../../public/Pinterest.svg"
// import FPinterest from "../../public/FPinterest.svg"
// import PWA from "../../public/Pwa.svg"
// import Saas from "../../public/Saas.svg"
// import VPinterest from "../../public/VPinterest.png"
// import Image from 'next/image'
// const OurPartner = () => {
//     const BrandImages = [
//         {
//             brandName: "Pinterest",
//             brandImage: Pinterest
//         },
//         {
//             brandName: "FPinterest",
//             brandImage: FPinterest
//         },
//         {
//             brandName: "Pwa",
//             brandImage: PWA
//         },
//         {
//             brandName: "SAAS",
//             brandImage: Saas
//         },
//         {
//             brandName: "VPinterest",
//             brandImage: VPinterest
//         },
//         {
//             brandName: "Pinterest",
//             brandImage: Pinterest
//         },
//         {
//             brandName: "FPinterest",
//             brandImage: FPinterest
//         },
//         {
//             brandName: "Pwa",
//             brandImage: PWA
//         },
//         {
//             brandName: "SAAS",
//             brandImage: Saas
//         },
//         {
//             brandName: "VPinterest",
//             brandImage: VPinterest
//         },
//     ];

//     return (
//         <div className='flex flex-col sm:gap-16 gap-6 pt-14 sm:px-[72px] px-8 
//         xl:px-[7%] 2xl:px-[10.8%] 3xl:px-[15%] 
//          4xl:px-[30%] 5xl:px-[32.3%] 6xl:px-[36.5%]'>
//             <div className='flex flex-col gap-3 '>
//                 <h1 className='sm:text-[99px] text-4xl font-[698] sm:leading-[131.97px] text-[#E62D2D]'>
//                     Our <br />
//                     Partners .
//                 </h1>
//                 <h4 className='text-[#E62D2D] sm:text-[35px] text-lg font-normal sm:leading-[44px] 
//                 font-sans tracking-[0.25%]'>
//                     Your success is our success.
//                 </h4>
//             </div>
//             {/* brands-logo */}
//             <div className='flex justify-between sm:gap-0 gap-8 relative sm:pt-6 pt-4'>
//                 {
//                     BrandImages?.slice(0, 5)?.map((brand, index) => (
//                         <div key={index} >
//                             <Image src={brand?.brandImage} alt={brand?.brandName} />
//                         </div>
//                     ))
//                 }
//             </div>
//             <div className='flex justify-between sm:gap-0 gap-8  relative'>
//                 {
//                     BrandImages?.slice(5)?.map((brand, index) => (
//                         <div key={index}>
//                             <Image src={brand?.brandImage} alt={brand?.brandName} />
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default OurPartner

import React from 'react';
import Pinterest from "../../public/Pinterest.svg";
import FPinterest from "../../public/FPinterest.svg";
import PWA from "../../public/Pwa.svg";
import Saas from "../../public/Saas.svg";
import VPinterest from "../../public/VPinterest.png";
import Image from 'next/image';

const OurPartner = () => {
    const BrandImages = [
        {
            brandName: "Pinterest",
            brandImage: Pinterest
        },
        {
            brandName: "FPinterest",
            brandImage: FPinterest
        },
        {
            brandName: "Pwa",
            brandImage: PWA
        },
        {
            brandName: "SAAS",
            brandImage: Saas
        },
        {
            brandName: "VPinterest",
            brandImage: VPinterest
        },
        {
            brandName: "Pinterest",
            brandImage: Pinterest
        },
        {
            brandName: "FPinterest",
            brandImage: FPinterest
        },
        {
            brandName: "Pwa",
            brandImage: PWA
        },
        {
            brandName: "SAAS",
            brandImage: Saas
        },
        {
            brandName: "VPinterest",
            brandImage: VPinterest
        },
    ];

    return (
        <div className='flex flex-col sm:gap-16 gap-6 pt-14 sm:px-[72px] px-8 
        xl:px-[7%] 2xl:px-[10.8%] 3xl:px-[15%] 
         4xl:px-[23%] 5xl:px-[32%] 6xl:px-[36.5%]'>
            <div className='flex flex-col gap-3 '>
                <h1 className='sm:text-[99px] text-4xl font-[698] sm:leading-[131.97px] text-[#E62D2D]'>
                    Our <br />
                    Partners .
                </h1>
                <h4 className='text-[#E62D2D] sm:text-[35px] text-lg font-normal sm:leading-[44px] 
                font-sans tracking-[0.25%]'>
                    Your success is our success.
                </h4>
            </div>
            {/* brands-logo */}
            <div className='brand-grid grid-flow-row'>
                {
                    BrandImages?.map((brand, index) => (
                        <div key={index} className='brand-item'>
                            <Image src={brand?.brandImage} alt={brand?.brandName} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OurPartner;
