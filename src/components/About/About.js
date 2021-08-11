import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePrevious } from '../../custom_hooks/usePrevious';
import background from '../../imgs/backgrounds/about-background-min.jpg';
import './About.css';
import AboutNav from './AboutNav';
import AboutRestaurant from './AboutRestaurant';
import AboutPhilosophy from './AboutPhilosophy';
import AboutTeam from './AboutTeam';
import PropTypes from 'prop-types';

About.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    atTop: PropTypes.bool.isRequired
}

function About(props){
    const { isMobile, atTop } = props;
    const aboutBackground = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    const [headerRef, headerInView] = useInView({ threshold: 0 });
    const headerAni = headerInView ? 'About-header--inView' : null;

    const [currentAboutPage, setCurrentAboutPage] = useState(null)
    const articleRef = useRef();
    function returnActiveNav(keyword){
        setCurrentAboutPage(keyword)
    }

    const prevAboutPage = usePrevious(currentAboutPage);
    useEffect(() => {
        if(currentAboutPage && prevAboutPage !== null){
            let elTopPosition = articleRef.current.offsetTop;
            let navSize = isMobile ? 100 : 130;

            let scrollOptions = {
                top: atTop ? elTopPosition - navSize : elTopPosition - 100,
                behavior: "smooth"
            }
            window.scrollTo(scrollOptions)
        }
        //eslint-disable-next-line
    }, [currentAboutPage]) 
    
    return (
        <div className="About">
            <section style={aboutBackground} className={`About-background`}>
                <header ref={headerRef} className={`${headerAni} About-header`}>
                    <div className="About-quote">
                        <blockquote>“A certain degree of creative thinking is required to see the true beauty of a hamburger." <span>— Micky Cohen.</span></blockquote>
                    </div>
                </header>
                <AboutNav isMobile={ isMobile } returnActiveNav={returnActiveNav} links={['philosophy', 'restaurant', 'our staff']} />
            </section>
            <section ref={articleRef}>
                {currentAboutPage === 'philosophy' ? <AboutPhilosophy /> : null }
                {currentAboutPage === 'restaurant' ? <AboutRestaurant /> : null }
                {currentAboutPage === 'our staff' ? <AboutTeam /> : null }
            </section>
        </div>
    )
}

export default About;