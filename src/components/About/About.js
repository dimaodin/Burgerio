import React from 'react';
import { useInView } from 'react-intersection-observer';

import background from '../../imgs/backgrounds/about-background-min.jpg';
import './About.css';

import AboutRestaurant from './AboutRestaurant';
import PropTypes from 'prop-types';

About.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    atTop: PropTypes.bool.isRequired
}

function About(){
    const aboutBackground = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    const [headerRef, headerInView] = useInView({ threshold: 0 });
    const headerAni = headerInView ? 'About-header--inView' : null;
    
    return (
        <div className="About">
            <section style={aboutBackground} className={`About-background`}>
                <header ref={headerRef} className={`${headerAni} About-header`}>
                    <div className="About-quote">
                        <blockquote>"נדרשת מידה מסוימת של חשיבה יצירתית כדי לראות את היופי האמיתי של המבורגר." <span>— מיקי כהן</span></blockquote>
                    </div>
                </header>

            </section>
                <AboutRestaurant />
        </div>
    )
}

export default About;