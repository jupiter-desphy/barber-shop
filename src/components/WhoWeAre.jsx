import React from 'react';
import Staff from '../components/Staff';
import PortraitAlbum from '../components/PortraitAlbum';
import landscapeImage from '../images/grandpas-barbershop-239-100.jpeg';
import portraitImage from '../images/grandpas-barbershop.jpeg';


export default function WhoWeAre() {

    const portrait = window.innerWidth < window.innerHeight;
    return (
        <div className='about'>
            <picture className="hero">
                <source srcSet={landscapeImage}
                    media="(orientation: landscape)" />
                <source srcSet={portraitImage}
                    media="(orientation: portrait)" />
                <img src={landscapeImage} alt="grandpa's barbershop with barbers and community lined up behind child getting hair cut." width='100%' />
            </picture>
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
            {portrait && <PortraitAlbum />}
        </div>
    )
}
