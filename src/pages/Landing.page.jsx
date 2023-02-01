import React from 'react';
import GoogleMap from '../components/GoogleMap';
import Hours from '../components/Hours';
import Address from '../components/Address';
import PhoneNumber from '../components/PhoneNumber';
import ImageGallery from '../components/ImageGallery';
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

      <div id='about'>
        <ImageGallery />

        <h1>WHO WE ARE</h1>
        <div className=''>
          <p>
            As third and fourth generation barbers, we're a father and son team with over 100 years of experience in the family name.
          </p>
          <p>
            We offer precision haircuts, beard trims, and hot towel shaves as well as a wide variety of classic scissor and clipper haircuts that will have you feeling brand new.
          </p>
      <Staff />
        </div>
      </div>
      { window.innerWidth < window.innerHeight ?
      <PortraitAlbum />
      :
      <>
              {/* <picture className="hero">
          <source srcSet={image1}
            media="(orientation: landscape)" />
          <source srcSet={image2}
            media="(max-width: 650px)" />
          <img src={image1} alt="barber shop" width='100%' />
        </picture> */}
      </>
      }
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