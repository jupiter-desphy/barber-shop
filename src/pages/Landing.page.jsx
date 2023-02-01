import React from 'react';
import GoogleMap from '../components/GoogleMap';
import Hours from '../components/Hours';
import Address from '../components/Address';
import PhoneNumber from '../components/PhoneNumber';
import WhoWeAre from '../components/WhoWeAre';
import Staff from '../components/Staff';
import Reviews from '../components/Reviews';
import PortraitAlbum from '../components/PortraitAlbum';
import Services from '../components/Services';
import desktopImage from '../images/barbershop169.jpeg';
import mobileImage from '../images/barbershop5-4.jpeg';
import image1 from '../images/mr-tony-tony.jpeg';
import image2 from '../images/stuffed-horse-haircut-4-3.jpeg';


// import MyGallery from '../components/ImageGallery';

export const Landing = () => {

  const bgImage = window.innerWidth > window.innerHeight ? desktopImage : mobileImage;

  return (
    <>
      <div className="hero-container" style={{ backgroundImage: `url(${bgImage})` }}>

      </div>
      <div className='columns'>

        <div className="west-side" >
          {/* <div id='call'> */}
          <a href='tel:9718884133' id='call'>
            Call 971-888-4133
          </a>
          {/* </div> */}
        </div>

        <div className='directions'>
          <Address />
        </div>

        <div className='east-side'>
          <Hours />
        </div>
      </div>

      {/* <br /> */}

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

      <br />

      {/* <div id='about'> */}
      <WhoWeAre />
      <Reviews />
      <a href="https://www.yelp.com/biz/tabor-barber-shop-portland" target='_blank' rel='noreferrer'>

          <br />
          <div className="marquee-container">
            <p className='rounded button space-between'>
              <u>
                Shout us out on yelp!
              </u>
            </p>
          </div>
          <br />
      </a>
      <Services />

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
