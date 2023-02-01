import React from 'react';
import Hours from '../components/Hours';
import Address from '../components/Address';
import WhoWeAre from '../components/WhoWeAre';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import desktopImage from '../images/barbershop169.jpeg';
import mobileImage from '../images/barbershop5-4.jpeg';

export const Landing = () => {

  const bgImage = window.innerWidth > window.innerHeight ? desktopImage : mobileImage;

  return (
    <>
      <div className="hero-container" style={{ backgroundImage: `url(${bgImage})` }}>

      </div>
      <div className='columns'>

        <div className="west-side" >
          <a href='tel:9718884133' id='call'>
            Call 971-888-4133
          </a>
        </div>

        <div className='directions'>
          <Address />
        </div>

        <div className='east-side'>
          <Hours />
        </div>
      </div>

      <a href='https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland' id='text-dec-none'>
        <div className='marquee-container'>
          <div className='marquee'>
            <p>
              Kids, senior & military discounts!
            </p>
            <p className='hidden'>
              Walk-ins welcome!
            </p>
          </div>
        </div>
      </a>

      <br />
      <WhoWeAre />
      <Reviews />
      <a href="https://www.yelp.com/biz/tabor-barber-shop-portland" target='_blank' rel='noreferrer' id='text-dec-none'>

        <br />
        <div className="marquee-container">
          <p className='rounded button space-between'>
              Shout us out on yelp!
          </p>
        </div>
        <br />
      </a>
      <Services />
    </>
  )
}

/* <div className='columns'>

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
</div> */
/* <GoogleMap width={"100%"} height={'300px'} /> */