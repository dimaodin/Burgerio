import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ContactFormCompleted.css';

ContactFormCompleted.propTypes = {
    formData: PropTypes.object.isRequired
}

export default function ContactFormCompleted(props){
    const { formData, resetForm } = props;

    function handleContactLink(e){
        e.preventDefault();
        resetForm();
    }

    return(
        <div className="ContactFormCompleted">
            <div className="ContactFormCompleted-main">
                <h4>Thanks for reaching out, <span style={{ textTransform: 'capitalize'}}> {`${formData.firstname}!`}</span></h4>
                <div className="ContactFormCompleted-summary">
                    <p>The following message has been sent to Burgerio © Delievery:</p>
                    <div className="ContactFormCompleted-summaryBox">
                        <div className="ContactFormCompleted-summaryLabel">
                            <p>Sent from:</p>
                            <p style={{ textTransform: 'capitalize'}}className="ContactFormCompleted-summaryData">{`${formData.firstname} ${formData.lastname}`}</p>
                        </div>
                        <div className="ContactFormCompleted-summaryLabel">
                            <p>Subject:</p>
                            <p style={{ textTransform: 'capitalize'}}className="ContactFormCompleted-summaryData">{`${formData.subject}`}</p>
                        </div>
                        <div className="ContactFormCompleted-summaryLabel">
                            <p>Time sent:</p>
                            <p className="ContactFormCompleted-summaryData">{`${formData.date}`}</p>
                        </div>
                        <div className="ContactFormCompleted-summaryLabel">
                            <p>Return E-mail:</p>
                            <p className="ContactFormCompleted-summaryData">{`${formData.email}`}</p>
                        </div>
                        <div className="ContactFormCompleted-summaryLabel">
                            <p>Contact Phone number:</p>
                            <p className="ContactFormCompleted-summaryData">{`${formData.phone}`}</p>
                        </div>
                        <div className="ContactFormCompleted-summaryLabel">
                            <p>Message:</p>
                            <p style={{ textTransform: 'capitalize'}}className="ContactFormCompleted-summaryData">{`${formData.message}`}</p>
                        </div>
                    </div>
                </div>
                <div className="ContactFormCompleted-btnContainer">
                    <Link className="ContactFormCompleted-btn ContactFormCompleted-btn--primary" to="/">Back Home</Link>
                    <button
                        onClick={handleContactLink} 
                        className="ContactFormCompleted-btn ContactFormCompleted-btn--secondary">
                        <i className="fas fa-long-arrow-alt-left"></i>
                        Back
                    </button>
                </div>
            </div>
            <div className="ContactFormCompleted-loader">
                <div className="ContactFormCompleted-loaderIcon">
                </div>
                <h4 className="ContactFormCompleted-loaderMessage">Processing your message <span role="img" aria-label="rocket">🚀</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </h4>
            </div>
        </div>
    )
}