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
                <h1 className="Home-brand">בורגריו</h1>
                <img className={`${ logoAni } Home-logo`} src={Logo} alt="Burgerio Logo"/>
            </div>
            <main className="Home-latest">
                <h1 className="Home-header">ברוכים הבאים <span role="img" aria-label="Waving Hand">👋</span></h1>
                <p className="Home-message">לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</p>
                <p className="Home-message">צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.</p>
                <div className="Home-menu">
                <a href="/menu"><span role="img" aria-label="burger">🍔</span> לחצו עליי לתפריט שלנו <span role="img" aria-label="burger">🍔</span></a>
                </div>
            </main>
        </div>
    )
}

export default Home;