import React from 'react';
import './LoadingScreen.css';
import whiteLogo from '../../imgs/logos/logo-white.png';
import PropTypes from 'prop-types';

LoadingScreen.propTypes = {
    loadingMessage: PropTypes.string
}

export default function LoadingScreen(){
    return(
        <div className="LoadingScreen">
            <div className="LoadingScreen-main">
                <img className="LoadingScreen-spinner" src={whiteLogo} alt=""/>
            </div>
        </div>
    )
}