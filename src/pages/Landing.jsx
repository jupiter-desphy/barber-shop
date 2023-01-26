import React from 'react';
import barbershop from '../images/barbershop.jpeg';
import barbershop1 from '../images/barbershop169.jpeg';
import barbershop2 from '../images/barbershop54.jpeg';

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
    </div>
  )
}
