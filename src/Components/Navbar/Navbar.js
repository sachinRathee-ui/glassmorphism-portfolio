import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { openMenu } from '../../Redux/Actions/Actions';

const Navbar = () => {
	const toggle = useSelector((state) => state.modal.isMenuOpen);
	const dispatch = useDispatch();

	const handleToggle = () => {
		dispatch(openMenu(!toggle));
		if (!toggle) {
			document.body.classList.add('overflowY-hidden');
		} else {
			document.body.classList.remove('overflowY-hidden');
		}
	};
	return (
		<div className='main'>
			<header className='header'>
				<div className='container'>
					<div className='row flex-end'>
						<button
							type='button'
							className='nav-toggler'
							onClick={handleToggle}>
							<span></span>
						</button>
						<div className={`nav ${!toggle && 'hidden'}`}>
							<div className='nav-inner'>
								<ul>
									<li>
										<Link to='/' className='nav-item' onClick={handleToggle}>
											Home
										</Link>
									</li>
									<li>
										<Link
											to='/about'
											className='nav-item'
											onClick={handleToggle}>
											About
										</Link>
									</li>
									<li>
										<Link
											to='/portfolio'
											className='nav-item'
											onClick={handleToggle}>
											Portfolio
										</Link>
									</li>
									<li>
										<Link
											to='/contact'
											className='nav-item'
											onClick={handleToggle}>
											Contact
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
