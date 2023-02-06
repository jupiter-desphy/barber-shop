import React from 'react';
import Reviews from '../components/Reviews';
import Marquee from '../components/Marquee';

export const ReviewsPage = () => {
  return (
    <div>
      <Reviews />
      <a href="https://www.yelp.com/biz/tabor-barber-shop-portland" target='_blank' id='text-dec-none' rel='noreferrer'>
      <div className="marquee-container" style={{
        textAlign: 'center',
        fontSize: '16px'
        }}>
        <i>  
        We're proud and grateful to our community for spreading the word, so we can focus on our craft. We invite you to read more or add on <u>Yelp!</u>
        </i>
      </div>
      </a>
    </div>
  )
}
