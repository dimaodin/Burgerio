import React from 'react';
import './AboutRestaurant.css';
import AboutRestaurantSection from './AboutRestaurantSection';
import AboutImgGallery from './AboutImgGallery';
import restaurantStockImg from '../../imgs/restaurant_stock/restaurant-stock3.jpg';
import burgerStock from '../../imgs/other_imgs/burger-stock-min.jpg';
import worldgateImg from '../../imgs/other_imgs/worldgatecentre-min.jpg';

const section_data = [
    {
        header: 'העיצוב.',
        text: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.',
        highlightText: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.',
        img: {
            src: restaurantStockImg,
            orientation: 'portrait'
        }
    },
    {
        header: 'האוכל.',
        text: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.',
        highlightText: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.',
        img: {
            src: burgerStock,
            orientation: 'portrait'
        }
    },
    {
        header: 'המיקום.',
        text: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.',
        highlightText: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.',
        img: {
            src: worldgateImg,
            orientation: 'landscape'
        }
    }
]

function AboutRestaurant(){
    const sectionMap = section_data.map((section, idx) => {
        let props = section;

        if(idx === section_data.length - 1){
            props = { ...section, last: true }
        }

        if(idx % 2 !== 0){
            props = { ...props, reverse: true }
        }

        return <AboutRestaurantSection { ...props } key={ idx } />;
    })

    return (
        <section className="AboutRestaurant">
            { sectionMap }
            <AboutImgGallery />
        </section>
    )
}

export default AboutRestaurant;