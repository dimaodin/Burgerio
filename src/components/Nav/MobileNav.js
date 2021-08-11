import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MobileNav.css';
import HamburgerMenu from './HamburgerMenu';
import PropTypes from 'prop-types';

MobileNav.propTypes = {
    atTop: PropTypes.bool.isRequired,
    navLinks: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired
}


export default function MobileNav(props){
    const { atTop, navLinks, location } = props;

    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
    const hamburgerMenuOpenAni = hamburgerMenuOpen ? 'open' : null;

    //LOCK BODY FROM SCROLLING WHEN HAMBURGER MENU IS OPEN
    useEffect(() => {
        if(hamburgerMenuOpen === false){
            document.body.style.overflow = '';
        } else if (hamburgerMenuOpen === true) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        }
    }, [hamburgerMenuOpen])

    const hideAddressAni = !atTop ? 'MobileNav-address--hidden' : null;

    const mobileLinks = navLinks.map((link, i) => (
        <li key={link.text} 
            onClick={() => setHamburgerMenuOpen(hamburgerMenuOpen => !hamburgerMenuOpen)} 
            className={`MobileNav-link ${location.pathname === link.path ? 'MobileNav-link--active': null}`}>
            <Link to={link.path}>{link.text}</Link>
        </li>
    ))

    return (
        <nav className="MobileNav">
            <ul className="MobileNav-bar">
                <li onClick={() => setHamburgerMenuOpen(false)} className="MobileNav-brand">
                    <Link to="/">
                        <h1>BURGERIO</h1>
                        <p>Best Meat & Sides.</p>
                    </Link>
                </li>
                <div onClick={() => setHamburgerMenuOpen(hamburgerMenuOpen => !hamburgerMenuOpen)} className="MobileNav-toggleBtn">
                    <div className={`MobileNav-gripLine ${hamburgerMenuOpenAni}`}></div>
                    <div className={`MobileNav-gripLine ${hamburgerMenuOpenAni}`}></div>
                </div>
                <p className={`${hideAddressAni} MobileNav-address`}>
                <span role="img" aria-label="rocket">🚀</span> CRAZY HAPPY HOUR DEALS 3PM-7PM MON-FRI! <span role="img" aria-label="rocket">🚀</span>
                </p>
            </ul>
            <HamburgerMenu 
                hamburgerMenuOpen={hamburgerMenuOpen} 
                mobileLinks={mobileLinks} 
            />
        </nav>
    );
}