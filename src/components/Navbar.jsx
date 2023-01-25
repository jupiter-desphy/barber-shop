import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Pivot as Hamburger } from 'hamburger-react'

export default function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    const toggleNav = () => {
        setShowLinks(!showLinks);
    }

    return (

        <header className='primary-header'>
            <nav className='west-side'>
                <ul id={showLinks ? "show-links" : ""} className='primary-navigation flex'>
                    <li>
                        <NavLink to={"/about"}>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/reviews"}>REVIEWS</NavLink>
                    </li>
                </ul>
            </nav>
            <h1 className='logo'>
                <NavLink to={"/"}>TABOR</NavLink>
                {/* <image src="/barbershop/public/logo512.png" /> */}
            </h1>

            <button onClick={toggleNav} className='mobile-nav-toggle' aria-controls='primary-navigation' data-visible="false" aria-expanded={showLinks}>
                <Hamburger size={18} />
                <span className='sr-only'>Menu</span>
            </button>

            <div className='east-side'>

                <NavLink id={'book'} to={"/reviews"}><strong>BOOK <span className='hidden'>APPOINTMENT</span></strong></NavLink>
                {/* <NavLink to={"/reviews"} className='hidden'>CONTACT</NavLink> */}
                {/* 971-888-4133 */}
            </div>
        </header>
    )
}
