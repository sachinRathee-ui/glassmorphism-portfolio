import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Me from '../../assets/img/me.png';
import { useSelector } from 'react-redux';

const Home = () => {
	const isPopup = useSelector((state) => state.modal.isPopup);
	const isMenuOpen = useSelector((state) => state.modal.isMenuOpen);
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		if (isPopup || isMenuOpen) {
			setFadeOut(true);
		} else {
			setFadeOut(false);
		}
	}, [isPopup, isMenuOpen]);
	return (
		<div className={`main ${fadeOut && 'fadeOut'}`}>
			<section className='home-section align-item-center'>
				<div className='container'>
					<div className='row align-item-center'>
						<div className='home-text'>
							<p>Hello, I'm</p>
							<h1>Sachin rathee</h1>
							<h2>Frontend Developer / DevOps Engineer</h2>
							<Link to='/about' className='btn'>
								More About Me
							</Link>
							<Link to='/portfolio' className='btn'>
								Portfolio
							</Link>
						</div>
						<div className='home-img'>
							<div className='img-box'>
								<img src={Me} alt='Sachin Rathee' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
