import React, { useEffect, useState } from 'react';
import { portfolios } from '../../Data/data';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popupModal } from '../../Redux/Actions/Actions';

const Portfolio = () => {
	const isPopup = useSelector((state) => state.modal.isPopup);
	const dispatch = useDispatch();
	const isMenuOpen = useSelector((state) => state.modal.isMenuOpen);
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		if (isPopup || isMenuOpen) {
			setFadeOut(true);
		} else {
			setFadeOut(false);
		}
	}, [isPopup, isMenuOpen]);

	const handleFadeOut = () => {
		dispatch(popupModal(!isPopup));
		if (!isPopup) {
			document.body.classList.add('overflowY-hidden');
		} else {
			document.body.classList.remove('overflowY-hidden');
		}
	};

	return (
		<>
			<div className={`main ${fadeOut && 'fadeOut'}`}>
				<section className={`portfolio-section`}>
					<div className='container'>
						<div className='row'>
							<div className='section-title'>
								<h2>Portfolio</h2>
							</div>
						</div>
						<div className='row'>
							{portfolios.map((portfolio) => (
								<div className='portfolio-item' key={portfolio.id}>
									<div className='portfolio-item-thumbnail'>
										<img
											src={portfolio.thumbnail}
											alt='Portfolio item thumbnail'
										/>
									</div>
									<h3 className='portfolio-item-title'>{portfolio.title}</h3>
									<Link
										to={`${portfolio.id}`}
										className='btn'
										onClick={() => handleFadeOut(!isPopup)}>
										View Project
									</Link>
									<div className='portfolio-item-details'>
										<div className='description'>
											<p>{portfolio.description}</p>
										</div>
										<div className='general-info'>
											<ul>
												<li>
													Created - <span>{portfolio.createDate}</span>
												</li>
												<li>
													Technology used -{' '}
													<span>{portfolio.technologies}</span>
												</li>
												<li>
													Role - <span>{portfolio.role}</span>
												</li>
												<li>
													View Online -{' '}
													<span>
														<a href={portfolio.link} target='_blank'>
															{portfolio.domain}
														</a>
													</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
			<Outlet />
		</>
	);
};

export default Portfolio;
