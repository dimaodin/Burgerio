import React from "react";
import "./Footer.css";
import PropTypes from "prop-types";

Footer.propTypes = {
    atTop: PropTypes.bool.isRequired
};

export default function Footer(props) {

    return (
        <footer className="Footer">
            <div className="Footer-hr">
                <div className="Footer-hrAccent"></div>
                <div className="Footer-hrAccent"></div>
                <div className="Footer-hrAccent"></div>
            </div>
            <div className="Footer-section">
                <div className="Footer-info">
                    <div className="Footer-infoSection">
                        <h3>כתובת <span role="img" aria-label="Round Pushpin">📍</span></h3>
                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer">
                            רוטשילד 23, תל אביב, ישראל <span role="img" aria-label="israeli flag"> 🇮🇱</span> 
                        </a>
                    </div>
                    <div className="Footer-infoSection">
                        <h3>שעות פתיחה <span role="img" aria-label="Clock">🕒</span></h3>
                        <p>ראשון עד חמישי: 10-23</p>
                        <p>שבת: 18-23</p>
                    </div>
                    <div className="Footer-infoSection">
                        <h3>טלפון נייד <span role="img" aria-label="Phone">📱</span></h3>
                        <a className="Footer-phone" href="tel:972991487020">
                            <p>991-487-020 (972+)</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="Footer-social">
                <a
                    href="https://facebook.com/BurgerioRestaurant/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a
                    href="https://www.instagram.com/burgerio.restaurant/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a
                    href="https://twitter.com/BurgerioRestaurant"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
            <div className="Footer-message">
                <p>
                © 2021 בורגריו, כל הזכויות שמורות.
                </p>
                <p>
                    פותח ע"י <a  
                    href="https://github.com/dimaodin"
                    target="_blank"
                    rel="noopener noreferrer">
                    דימה אודינצוב.
                    </a>
                </p>
            </div>

        </footer>
    );
}
