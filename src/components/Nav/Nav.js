import React from 'react';
import { Route } from 'react-router-dom';
import MobileNav from './MobileNav';
import FullNav from './FullNav';
import PropTypes from 'prop-types';

let navLinks = [
	{ path: '/', text: 'בית' },
	{ path: '/menu', text: 'תפריט' },
	{ path: '/about', text: 'עלינו' },
	{ path: '/contact', text: 'צרו קשר' },
	{ path: '/order', text: 'הזמן עכשיו' },
];

Nav.propTypes = {
	atTop: PropTypes.bool.isRequired,
	isMobile: PropTypes.bool.isRequired,
};

export default function Nav(props) {
	const { atTop, isMobile } = props;

	let fullNav = (
		<Route
			path='/'
			render={(routeProps) => <FullNav {...routeProps} navLinks={navLinks} atTop={atTop} />}
		/>
	);
	let mobileNav = (
		<Route
			path='/'
			render={(routeProps) => <MobileNav {...routeProps} navLinks={navLinks} atTop={atTop} />}
		/>
	);

	return isMobile ? mobileNav : fullNav;
}
