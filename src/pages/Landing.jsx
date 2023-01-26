import React from 'react';
import GoogleMap from '../components/GoogleMap';
import barbershop from '../images/barbershop.jpeg';
import barbershop1 from '../images/barbershop169.jpeg';
import barbershop2 from '../images/barbershop5-4.jpeg';

// import MyGallery from '../components/ImageGallery';

export const Landing = () => {
  return (
    <div>
        <picture>
          <source srcSet={barbershop1}
          media="(orientation: landscape)" />
          <source srcSet={barbershop2}
          media="(max-width: 650px)" />
          <img src={barbershop} alt="barber shop" width='100%' />
        </picture>
        <div className='columns'>
    <a href='tel:9718884133'>971-888-4133</a>
  <GoogleMap width={"100%"} height={'400px'} />        
        </div>
    </div>
  )
}
