import React from 'react';
import { Link } from 'react-router-dom';
import './FullNav.css';
import whiteLogo from '../../imgs/logos/logo-white.png';
import PropTypes from 'prop-types';

FullNav.propTypes = {
    navLinks: PropTypes.array.isRequired,
    atTop: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired
}

export default function FullNav(props){
    const { navLinks, atTop, location } = props;

    let addressAni = !atTop ? 'FullNav-address--hide' : '';
    let navBarAni = !atTop ? 'FullNav-navBar--slim' : '';
    let navBarBrandAni = !atTop ? '' : 'FullNav-brandContainer--hidden';

    let desktopLinks = navLinks.map((link, i) => (
        <li key={ link.text } className={`FullNav-link ${location.pathname === link.path ? 'FullNav-link--active': ''}`}>
            <Link to={link.path}>{link.text}</Link>
        </li>
    ))

    return (
        <nav className="FullNav">
            <ul className={`${navBarAni} FullNav-navBar`}>
                <Link to="/" className={`${navBarBrandAni} FullNav-brandContainer`}>
                    <img src={whiteLogo} alt=""/>
                    <div>
                        <h1 className='FullNav-brand'>Burgerio</h1>
                        <p>Best Meat & Sides.</p>
                    </div>
                </Link>
                <div className="FullNav-linkList">
                    {desktopLinks}
                </div>
                <p className={`${addressAni} FullNav-address`}><span role="img" aria-label="rocket">🚀</span> CRAZY HAPPY HOUR DEALS 3PM-7PM MON-FRI! <span role="img" aria-label="rocket">🚀</span></p>
            </ul>
        </nav>
    );
}