import React, { useRef } from 'react';
import './Order.css';
import PropTypes from 'prop-types';
import mishloha_img from '../../imgs/service_badges/mishloha_badge.png'
import gett_img from '../../imgs/service_badges/gett_delivery_badge.png'
import tenbis_img from '../../imgs/service_badges/tenbis_badge.png'
import wolt_img from '../../imgs/service_badges/wolt_badge.png'

Order.propTypes = {
    atTop: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired
}

const MISHLOHA = { 
    link: 'https://www.mishloha.co.il/',
    img: mishloha_img
};

const GETT = { 
    link: 'https://gett.com/il/delivery/',
    img: gett_img
};

const TENBIS = { 
    link: 'https://www.10bis.co.il/',
    img: tenbis_img
};

const WOLT = { 
    link: 'https://wolt.com/',
    img: wolt_img
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

    const platformList = [WOLT, MISHLOHA, GETT, TENBIS].map(platform => (
        <a href={ platform.link } key={ platform.link } target='_blank' rel='noopener noreferrer' className='Order-platform'>
            <img src={ platform.img } alt="Burgerio Restaurant Delivery"/>
        </a>
    ))

    return (
        <div className="Order">
            <div className="Order-background">
                <div onClick={ executeScroll } className="Order-btn">
                    <p><span className='Order-btnAni'>לחצו</span> עליי</p>
                    <p>כדי לבחור פלטפורמת שילוח</p>
                </div>
            </div>
            <div ref={platformListRef} className="Order-services">
                <p>התפריט המלא שלנו זמין לאיסוף ו/או למשלוח אצל הספקים הבאים:</p>
                <div className="Order-platformList">
                    { platformList }
                </div>
            </div>
        </div>
    )
}