import React, { useEffect, useReducer } from 'react';
import { Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Order from './components/Order/Order';
import Modal from './components/Common/Modal';
import Footer from './components/Common/Footer';
import './Burgerio.css';

function bodyReducer(state, action) {
	switch (action.type) {
		case 'atTop': {
			return { ...state, atTop: action.payload };
		}
		case 'isMobile': {
			return { ...state, isMobile: action.payload };
		}
		case 'componentMounted': {
			return { ...state, componentMounted: action.payload };
		}
		case 'isModalOpen': {
			return {
				...state,
				isModalOpen: { content: action.payload.content, open: action.payload.toggle },
			};
		}
		default:
			return state;
	}
}

let initState = {
	atTop: window.scrollY < 100,
	isMobile: window.innerWidth < 1025,
	componentMounted: false,
	isModalOpen: { content: null, open: false },
};

export const ToggleModalContext = React.createContext();
export const MainStateContext = React.createContext();

export default function Burgerio() {
	const [state, dispatch] = useReducer(bodyReducer, initState);
	const { atTop, isMobile, componentMounted, isModalOpen } = state;

	//MOBILE STATE
	useEffect(() => {
		function handleResize() {
			if (isMobile && window.innerWidth > 1025) {
				dispatch({ type: 'isMobile', payload: false });
			} else if (!isMobile && window.innerWidth < 1025) {
				dispatch({ type: 'isMobile', payload: true });
			} else {
				return;
			}
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [isMobile]);

	//SCROLL STATE AND LISTENER FOR HIDDEN FOOTER
	useEffect(() => {
		function handleScroll() {
			if (document.body.clientHeight < 1250) {
				dispatch({ type: 'atTop', payload: true });
			} else if (window.scrollY > 100 && atTop) {
				dispatch({ type: 'atTop', payload: false });
			} else if (window.scrollY < 100 && !atTop) {
				dispatch({ type: 'atTop', payload: true });
			} else {
				return;
			}
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [atTop]);

	//SCROLL TOP LISTENER ON PATH CHANGE
	const location = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, [location]);

	//LOADING STATE (for LoadingScreen component)
	useEffect(() => {
		let maxTimeout = 2500;
		let minTimeout = 500;
		let randomTime = Math.random() * (maxTimeout - minTimeout) + minTimeout;
		dispatch({ type: 'componentMounted', payload: false });
		setTimeout(() => {
			dispatch({ type: 'componentMounted', payload: true });
		}, randomTime);
	}, [location]);

	//TOGGLE MODAL CODE
	function toggleModal(content, toggle) {
		dispatch({ type: 'isModalOpen', payload: { content, toggle } });
	}

	useEffect(() => {
		isModalOpen.open ? (document.body.style.overflow = 'hidden') : (document.body.style = '');
	}, [isModalOpen.open]);

	return (
		<div className='Burgerio'>
			<MainStateContext.Provider value={state}>
				<ToggleModalContext.Provider value={toggleModal}>
					<Route
						path='/'
						render={(routeProps) => (
							<Nav {...routeProps} isMobile={isMobile} atTop={atTop} />
						)}
					/>
					<Route
						exact
						path='/'
						render={() => (
							<Home atTop={atTop} loadingMessage={'חוזרים הביתה!'} disableLoading />
						)}
					/>
					<Route
						exact
						path='/menu'
						render={() => (
							<Menu
								atTop={atTop}
								isMobile={isMobile}
								componentMounted={componentMounted}
								loadingMessage={'טוענים את התפריט'}
								disableLoading={false}
								disableItemModal={false}
							/>
						)}
					/>
					<Route
						exact
						path='/about'
						render={() => <About isMobile={isMobile} atTop={atTop} />}
					/>
					<Route exact path='/contact' render={() => <Contact />} />
					<Route
						exact
						path='/order'
						render={() => <Order atTop={atTop} isMobile={isMobile} />}
					/>
					<Modal toggleModal={toggleModal} modalInfo={isModalOpen} />
					<Footer atTop={atTop} isMobile={isMobile} />
				</ToggleModalContext.Provider>
			</MainStateContext.Provider>
		</div>
	);
}
