import React from 'react';
import {Link} from 'react-router-dom';
import toggleMenu from './functions/ToggleMenu';
import togglePopup from './functions/TogglePopup';
import Menu from './Menu';

const Header = () => {
	// return (
	// 	<>
	// 		<div className='header'>
	// 			<div className='header_left'>
	// 				<div className='burger' onClick={toggleMenu}>
	// 					<span></span>
	// 				</div>
	// 				<div className='header_logo'>
	// 					<Link to='/'>
	// 						<img
	// 							className='header_logo_img'
	// 							src='../../img/main/header/main-logo.svg'
	// 							alt='main-logo'
	// 						/>
	// 					</Link>
	// 				</div>
	// 			</div>
	// 			<div className='header_right'>
	// 				<div className='phone'>
	// 					<a href='tel:+78124016495'>
	// 						<span>+7 (812) </span>401-64-95
	// 					</a>
	// 				</div>
	// 				<button className='btn btn-call' onClick={togglePopup}>
	// 					<i className='fas fa-phone-alt'></i>
	// 					<span>Обратный звонок</span>
	// 				</button>
	// 			</div>
	// 		</div>
	// 		<Menu />
	// 	</>
	// );
	return (
		<>
			<div className='header'>
				<div className='burger' onClick={toggleMenu}>
					<span></span>
				</div>
				<div className='header_logo'>
					<Link to='/'>
						<img
							className='header_logo_img'
							src='../../img/main/header/main-logo.svg'
							alt='main-logo'
						/>
					</Link>
				</div>
				<div className='phone'>
					<a href='tel:+78124016495'>
						<span>+7 (812) </span>401-64-95
					</a>
				</div>
				<button className='btn btn-call' onClick={togglePopup}>
					<i className='fas fa-phone-alt'></i>
					<span>Обратный звонок</span>
				</button>
			</div>
			<Menu />
		</>
	);
};

export default Header;
