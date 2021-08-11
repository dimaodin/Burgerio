import React, { useContext, useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MainStateContext } from '../../Burgerio';
import './AboutTeam.css';
import AboutTeamPersonnelCard from './AboutTeamPersonnelCard';
import johnDoeImg from '../../imgs/team/johndoe_portrait.jpg'
import placeholderImg from '../../imgs/team/placeholder_portrait-min.jpg'
import ResponsiveGallery from '../Common/ResponsiveGallery';

function importAll(r){
    return r.keys().map(r);
}

const images = importAll(require.context('../../imgs/team/gallery', false, /\.(png|jpe?g)$/));

export default function AboutTeam(){
    const mainState = useContext(MainStateContext)
    const { isMobile } = mainState;

    const [personnel, setPersonnel] = useState([
        {
            key: 'brandon_moser',
            img: johnDoeImg,
            firstname: 'John',
            lastname: 'Doe',
            title: 'Restaurant Owner',
            email: 'john.doe@gmail.com',
            linkin: 'https://www.linkedin.com/',
            info: 'Exercitation aliqua ea Lorem ad. Elit exercitation commodo sit aliquip eiusmod cillum do enim nulla incididunt. Reprehenderit ex Lorem ad laborum non cillum.',
            popupOpen: false
        },
        {
            key: 'place_holder',
            img: placeholderImg,
            firstname: 'Micky',
            lastname: 'Cohen',
            title: 'Excecutive Chef',
            email: 'mickey.cohen@gmail.com',
            linkin: 'https://www.linkedin.com/',
            info: 'Exercitation aliqua ea Lorem ad. Elit exercitation commodo sit aliquip eiusmod cillum do enim nulla incididunt. Reprehenderit ex Lorem ad laborum non cillum.',
            popupOpen: false,
            flipOrder: true
        }
    ])

    //EMAIL POPUP HANDLERS//
    let emailRef = useRef({});
    emailRef.current = {};
    function handleEmailBtnClick(key){
        let personnelCopy = personnel.map(person => person.key === key ? { ...person, popupOpen: true } : person);
        setPersonnel(personnelCopy)
        emailRef.current[key].select();
        document.execCommand("copy")
    }

    useEffect(() => {
        function handleEvt(e){
            const popupOpen = personnel.some(person => person.popupOpen);
            const closeAllPopups = personnel.map(person => {
                if(e.target.dataset && e.target.dataset.key === person.key){
                    return { ...person, popupOpen: !person.popupOpen }
                } else {
                    return { ...person, popupOpen: false }
                }
            });

            if(e.type === 'click' && !e.target.parentNode.classList.contains("AboutTeamPersonnelCard-emailPopup") && popupOpen){
                setPersonnel(closeAllPopups)
            } else if(e.type === 'scroll' && popupOpen){
                setPersonnel(closeAllPopups)
            } else if(e.type === 'resize' && popupOpen){
                setPersonnel(closeAllPopups)
            }  else return;
        }

        window.addEventListener('click', handleEvt)
        window.addEventListener('scroll', handleEvt)
        window.addEventListener('resize', handleEvt)
        return () => {
            window.removeEventListener('click', handleEvt)
            window.removeEventListener('scroll', handleEvt)
            window.removeEventListener('resize', handleEvt)
        }
    }, [personnel])
    //------------------//

    const [headerRef, headerInView] = useInView({ threshold: 0, triggerOnce: true })
    const headerClass = headerInView ? 'inView' : null;

    return(
        <section className="AboutTeam">
            <div ref={ headerRef } className={`AboutTeam-header ${headerClass}`}>
            <span role="img" aria-label="chef">👨‍🍳</span>
                <h3>Meet The </h3>
                <h3>Burgerio Staff </h3>
                <span role="img" aria-label="chef">👩‍🍳</span>
            </div>
            {personnel.map(person => (
                <AboutTeamPersonnelCard 
                    key={ person.key }
                    data={ person } 
                    isMobile={ isMobile } 
                    showEmail={ handleEmailBtnClick } 
                    ref={e => emailRef.current[person.key] = e} 
                />
            ))}
            <p className="AboutTeam-staffHeader">& The Crew <span role="img" aria-label="crew">🦸‍♂️🦸</span></p>
            <ResponsiveGallery isMobile={ isMobile } columns={3} imgs={[...images, ...images, ...images]} />
        </section>
    )
}