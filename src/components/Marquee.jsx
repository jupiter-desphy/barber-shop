import React from 'react'

export default function Marquee({ hrefURl, text, wideScreenOnlyText }) {
  return (
    <a href={hrefURl} id='text-dec-none' role='button'>
    <div className='marquee-container'>
      <div className='marquee'>
        <p>
          {text}
        </p>
        <p className='hidden'>
          {wideScreenOnlyText}
        </p>
      </div>
    </div>
  </a>
  )
}
