import React from "react";
import "./Footer.css";
import PropTypes from "prop-types";

Footer.propTypes = {
    atTop: PropTypes.bool.isRequired
};

export default function Footer(props) {
    const { atTop } = props;

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
                        <h3>Address</h3>
                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer">
                            Avenida Roberto Silveira 381, Niteroi, Rio de Janeiro, Brazil.
                        </a>
                    </div>
                    <div className="Footer-infoSection">
                        <h3>Hours we open</h3>
                        <p>Monday - Saturday: 10am - 9pm</p>
                        <p>Sunday: 11am - 5pm</p>
                    </div>
                    <div className="Footer-infoSection">
                        <h3>Phone number</h3>
                        <a className="Footer-phone" href="tel:55-991-487020">
                            <p>(55) 991-487020</p>
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
                    © 2021 Burgerio. All rights reserved.
                </p>
                <p>
                    Made by <a  
                    href="https://github.com/dimaodin"
                    target="_blank"
                    rel="noopener noreferrer">
                    Dima Odintsov.
                    </a>
                </p>
            </div>
            <div
                className={`Footer-callBtn ${
                    atTop ? "" : "Footer-callBtn--unhide"
                }`}>
                <a href="tel:55-991-487020">
                    <i className="fas fa-phone-alt"></i>
                    <p>CALL NOW: <span>(55) 991-487020</span></p>
                </a>
            </div>
        </footer>
    );
}
