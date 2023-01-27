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
    <div className="hero-container">
      <picture className="hero" >
        <source srcSet={barbershop1}
          media="(orientation: landscape)" />
        <source srcSet={barbershop2}
          media="(max-width: 650px)" />
        <img src={barbershop1} alt="barber shop" width='100%' />
      </picture>
</div>
      <div className='columns'>

        <div className="west-side hours" >
          <Hours />
          {/* Mon - Fri &nbsp; | &nbsp; 10AM - 6PM
        <br></br>
          Sat - Sun &nbsp; | &nbsp; 10AM - 3PM */}
        </div>

        <div className='directions'>
          <Address />
        </div>

        <div className='east-side'>
          <div id='call'>
            Call <PhoneNumber />
          </div>
          <br />
        </div>
      </div>
<br></br>
<div className='invert-colors'>
      <h1>WHO WE ARE</h1>
      <div className=''>
        <p>
          As third and fourth generation barbers, we're a father and son team with over 100 years of experience in the family name.
        </p>
        <p>
          We offer precision haircuts, beard trims, and hot towel shaves as well as a wide variety of classic scissor and clipper haircuts that will have you feeling brand new.
        </p>
        <br></br>
      </div>
</div>

      <ImageGallery />

      {/* <div className='columns'>

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

      </div> */}
      {/* <GoogleMap width={"100%"} height={'300px'} /> */}
    </>
  )
}
