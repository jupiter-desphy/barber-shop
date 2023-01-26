import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Pivot as Hamburger } from 'hamburger-react'
import logo from '../images/taboroutlineblack.png';
export default function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    const toggleNav = () => {
        setShowLinks(!showLinks);
    }

    console.log('logo', logo)

    return (

        <header className='primary-header'>
            <nav className='west-side'>
                <ul id={showLinks ? "show-links" : ""} className='primary-navigation flex'>
                    <li>
                        <NavLink to={"/about"} onClick={() => setShowLinks(false)}>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"} onClick={() => setShowLinks(false)}>CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/reviews"} onClick={() => setShowLinks(false)}>REVIEWS</NavLink>
                    </li>
                </ul>
            </nav>
            {/* <h2 className='logo'> */}
            <NavLink to={"/"}>
            <h5 className='logo'>
                <img src={logo} alt='logo' height='35em' />
                <div>
                    BARBER SHOP
                </div>
            </h5>
            {/* <img src="./barbershop.jpeg" alt='logo' /> */}
            </NavLink>

            {/* </h2> */}

            <button onClick={toggleNav} className='mobile-nav-toggle' aria-controls='primary-navigation' data-visible="false" aria-expanded={showLinks}>
                <Hamburger size={28} />
                <span className='sr-only'>Menu</span>
            </button>

            <div className='east-side'>

                <a href='https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland' id={'book'} target='_blank' rel='noreferrer' ><strong>BOOK <span className='hidden'>APPOINTMENT</span></strong>
                </a>
                {/* <NavLink to={"/reviews"} className='hidden'>CONTACT</NavLink> */}
                {/* 971-888-4133 */}
            </div>
        </header>
    )
}
