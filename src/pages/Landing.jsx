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
        <div className='columns'>

        <iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.4003236395747!2d-122.60737919999995!3d45.522149100000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a1b30c96bea1%3A0x6a02a243943ccfaa!2sTabor%20Barber%20Shop!5e0!3m2!1sen!2sus!4v1674709948639!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" aria-hidden="false" tabIndex={'0'}></iframe>
        
        </div>
    </div>
  )
}
