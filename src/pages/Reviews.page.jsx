import React from 'react';
import Reviews from '../components/Reviews';

export const ReviewsPage = () => {
  return (
    <div className=''>
      <Reviews />
      <br />
      <br />
      <a href="https://www.yelp.com/biz/tabor-barber-shop-portland" target='_blank' rel='noreferrer' id='text-dec-none' className='flex-center'>
        {/* <div className="flex-center"> */}
        <p className='rounded button small-font'>
          <i>
            Shout us out on yelp!
          </i>
        </p>
      </a>
    </div>
  )
}
