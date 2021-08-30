import React, { useState } from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import background from '../../imgs/backgrounds/contact-background.jpg';
import ContactFormCompleted from './ContactFormCompleted';

export default function Contact(){
    const [isFormCompleted, setIsFormCompleted] = useState(false);
    const [formData, setFormData] = useState()
    function formCompletedCB(originalFormData){
        let formData = {};
        for(let key in originalFormData){
            formData[key] = originalFormData[key].value
        }
        window.scrollTo({top: 0})
        setFormData(formData)
        setIsFormCompleted(true)
    }

    function resetForm(){
        setIsFormCompleted(false)
    }

    const contactBackground = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <section className="Contact">
            <div className="Contact-header" style={contactBackground}>
                <div className="Contact-headerContainer">
                    <h3>שלום! <span role="img" aria-label="rocket">🚀</span></h3>
                    <p>יש לכם שאלה או הצעה?</p>
                    <p>דברו איתנו עכשיו <span role="img" aria-label="smiley">😊</span></p>
                </div>
            </div>
            <div className="Contact-formArea">
                {isFormCompleted ? (
                    <ContactFormCompleted formData={formData} resetForm={resetForm} />
                ) : (
                    <ContactForm formCompletedCB={formCompletedCB} />
                )}
            </div>
        </section>
    )
}