import React, { useRef } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./common/Card";

const testimonials = [
    { content: "Testimonial 1" },
    { content: "Testimonial 2" },
    { content: "Testimonial 3" },
    { content: "Testimonial 4" },
    { content: "Testimonial 5" }
]

function TestimonialCardSlider() {


    const settings = {
        dots: false,
        autoplay: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "15%",
        slidesToShow: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className=" relative w-auto">
            <Slider {...settings} className="my-slider">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex gap-4 w-full">
                        <Card />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default TestimonialCardSlider;