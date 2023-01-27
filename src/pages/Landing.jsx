import React from 'react';
import GoogleMap from '../components/GoogleMap';
import Hours from '../components/Hours';
import Address from '../components/Address';
import PhoneNumber from '../components/PhoneNumber';
import ImageGallery from '../components/ImageGallery';
import barbershop from '../images/barbershop.jpeg';
import barbershop1 from '../images/barbershop169.jpeg';
import barbershop2 from '../images/barbershop5-4.jpeg';

// import MyGallery from '../components/ImageGallery';

export const Landing = () => {
  return (
    <>
      <picture>
        <source srcSet={barbershop1}
          media="(orientation: landscape)" />
        <source srcSet={barbershop2}
          media="(max-width: 650px)" />
        <img src={barbershop} alt="barber shop" width='100%' />
      </picture>

      <div className='columns'>

        <div>
          <Hours />
          {/* Mon - Fri &nbsp; | &nbsp; 10AM - 6PM
        <br></br>
          Sat - Sun &nbsp; | &nbsp; 10AM - 3PM */}
        </div>

        <div className='directions'>
          <Address />
          <br></br>
        </div>

        <div id='call' className='call'>
          <PhoneNumber />
        </div>
          <br></br>
      </div>

      <ImageGallery />

      <h1>WHO WE ARE</h1>
      <div className=''>
        <p>
          As third and fourth generation barbers, we're a father and son team with over 100 years of experience in the family name.
        </p>
        <p>
          We offer precision haircuts, beard trims, and hot towel shaves as well as a wide variety of classic scissor and clipper haircuts that will have you feeling brand new.
        </p>
      </div>
      <div className='columns'>

        <div className='hours' >
          <h2>
            HOURS
          </h2><Hours />
        </div>

        <div className='call'>
          <h2>
            CALL
          </h2>
          <PhoneNumber />
        </div>
        <div className='directions'>
          <h2>
            DIRECTIONS
          </h2>
          <Address />
          <br></br>
        </div>

      </div>
      <GoogleMap width={"100%"} height={'300px'} />
    </>
  )
}
