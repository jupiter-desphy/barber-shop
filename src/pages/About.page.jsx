import React from 'react';
// import image from '../images/rhodeislandbarbershop.jpeg';
import ReactImageGallery from 'react-image-gallery'
import MyGallery from '../components/ImageGallery';
import Staff from '../components/Staff';
import PortraitAlbum from '../components/PortraitAlbum';

export const About = () => {
  return (
    <div>
      <MyGallery />
      <h1>WHO WE ARE</h1>
      <div className=''>
        <p>
          As third and fourth generation barbers, we're a father and son team with over 100 years of experience in the family name.
        </p>
        <p>
          We offer precision haircuts, beard trims, and hot towel shaves as well as a wide variety of classic scissor and clipper haircuts that will have you feeling brand new.
        </p>
      </div>
      <Staff />
      <PortraitAlbum />
    </div>
  )
}
