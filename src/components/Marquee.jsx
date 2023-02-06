import React from 'react'

export default function Marquee({ hrefURl, leftText, rightText }) {
    return (
        <a href={hrefURl} id='text-dec-none' role='button'>
            <div className='marquee-container'>
                    <span className='marquee-left'>
                        {leftText}
                    </span>
            </div>
            <div className="marquee-container">
                <span className="marquee-right">
                    {rightText}
                </span>
            </div>
        </a>
    )
}
