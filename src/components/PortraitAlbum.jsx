import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import image1 from '../images/mr-tony-tony.jpeg';
import image2 from '../images/stuffed-horse-haircut-4-3.jpeg';

export default function Reviews() {
    var settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        centerMode: true,
    };
   
    return (
      <div className='portrait-album'>
          <Slider {...settings}>
          <img src={image1} alt="barber shop" width='100%' />
          <img src={image2} alt="barber shop" width='100%' />
          </Slider>
      </div>
  );
}