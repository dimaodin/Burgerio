import React, { useRef } from 'react';
import './Order.css';
import PropTypes from 'prop-types';
import ubereats_img from '../../imgs/service_badges/ubereats_badge.png'
import grubhub_img from '../../imgs/service_badges/grubhub_badge.png'
import postmates_img from '../../imgs/service_badges/postmates_badge.png'
import fastordernow_img from '../../imgs/service_badges/fastordernow_badge-black.png'

Order.propTypes = {
    atTop: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired
}

const UBEREATS = { 
    link: 'https://www.ubereats.com/',
    img: ubereats_img
};

const GRUBHUB = { 
    link: 'https://www.grubhub.com/',
    img: grubhub_img
};

const POSTMATES = { 
    link: 'https://postmates.com/',
    img: postmates_img
};

const FASTORDERNOW = { 
    link: 'https://www.fastordernow.com/',
    img: fastordernow_img
};

export default function Order(props) {
    const { atTop, isMobile } = props;
    const platformListRef = useRef();
    function executeScroll(){
        let elTopPosition = platformListRef.current.offsetTop;
        let navSize = isMobile ? 85 : 115;

        let scrollOptions = {
            top: atTop ? elTopPosition - navSize : elTopPosition - 85,
            behavior: "smooth"
        }

        window.scrollTo(scrollOptions)
    }

    const platformList = [FASTORDERNOW, UBEREATS, GRUBHUB, POSTMATES].map(platform => (
        <a href={ platform.link } key={ platform.link } target='_blank' rel='noopener noreferrer' className='Order-platform'>
            <img src={ platform.img } alt="Burgerio Restaurant Delivery"/>
        </a>
    ))

    return (
        <div className="Order">
            <div className="Order-background">
                <div onClick={ executeScroll } className="Order-btn">
                    <p><span className='Order-btnAni'>Click</span> on me to</p>
                    <p>Select Ordering Platform</p>
                </div>
                <div className="Order-btnArrows">
                    <i className="fas fa-long-arrow-alt-down"></i>
                    <i className="fas fa-long-arrow-alt-down"></i>
                </div>
            </div>
            <div ref={platformListRef} className="Order-services">
                <p>Our full menu is avalable for pickup and/or delivery with the following providers:</p>
                <div className="Order-platformList">
                    { platformList }
                </div>
            </div>
        </div>
    )
}