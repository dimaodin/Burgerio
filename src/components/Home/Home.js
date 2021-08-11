import React, { useEffect } from 'react';
import './Home.css';
import Logo from '../../imgs/logos/logo-full-black.png'
import PropTypes from 'prop-types';
import { useIsMounting } from '../../custom_hooks/useIsMounting';

Home.propTypes = {
    atTop: PropTypes.bool
}

function Home(props){
    const { atTop } = props;

    const [isMounting, setIsMounting] = useIsMounting();
    useEffect(() => {
        let loadLogo = null;
        if(!atTop){
            setIsMounting(false);
        } else {
            setIsMounting(false);
            loadLogo = setTimeout(() => {
                setIsMounting(true)
            }, 0);
        }

        return (() => {
            clearTimeout(loadLogo)
        })
    }, [atTop, setIsMounting])

    let logoAni = isMounting ? 'Home-logo--loaded' : null;

    return (
        <div className='Home' >
            <div className="Home-parallax">
                <h1 className="Home-brand">BURGERIO</h1>
                <img className={`${ logoAni } Home-logo`} src={Logo} alt="Burgerio Logo"/>
            </div>
            <main className="Home-latest">
                <h1 className="Home-header">Welcome!</h1>
                <p className="Home-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum bibendum libero nec tempor. In vitae placerat massa, sit amet semper tortor. Etiam eu congue risus. Praesent finibus accumsan eros ornare finibus. Duis non massa sapien. Curabitur eget arcu leo. Quisque posuere elementum massa quis gravida. Maecenas suscipit rutrum sapien et placerat.</p>
                <p className="Home-message">Sed ut aliquam ligula. Pellentesque fringilla vulputate diam, a vehicula nulla hendrerit id. Cras ac venenatis enim, nec finibus massa. Nullam vel ante erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer non nibh sit amet ligula imperdiet hendrerit sit amet eget tortor. Integer pulvinar elit non velit maximus porta. In a leo non lorem volutpat consectetur nec id turpis. Mauris mollis molestie tellus a lobortis. Fusce vel molestie metus.</p>
                <div className="Home-menu">
                <a href="/menu"><span role="img" aria-label="burger">🍔</span> CLICK HERE FOR OUR MENU <span role="img" aria-label="burger">🍔</span></a>
                </div>
            </main>
        </div>
    )
}

export default Home;