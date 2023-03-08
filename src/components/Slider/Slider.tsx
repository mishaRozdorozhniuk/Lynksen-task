import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slider.scss'

interface SliderComponentProps {
    children: React.ReactNode
}

const SliderComponent: React.FC<SliderComponentProps> = ({children}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "1px",
        arrows: false
    };
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    );
};

export default SliderComponent;
