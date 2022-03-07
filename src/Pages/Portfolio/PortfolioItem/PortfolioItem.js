import React, { useEffect } from 'react';
import { portfolios } from '../../../Data/data';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { popupModal } from '../../../Redux/Actions/Actions';
import { useDispatch, useSelector } from 'react-redux';

const PortfolioItem = () => {
	const params = useParams();
	const navigate = useNavigate();
	const isPopup = useSelector((state) => state.modal.isPopup);

	const dispatch = useDispatch();

	useEffect(() => {
		if (isPopup === false) {
			navigate(-1);
		}
	}, []);

	const handleClose = () => {
		dispatch(popupModal(!isPopup));
		navigate(-1);
		if (isPopup) {
			document.body.classList.remove('overflowY-hidden');
		}
	};

	return (
		<>
			{portfolios
				.filter((portfolio) => portfolio.id === params.id)
				.map((portfolio) => (
					<div className={`portfolio-popup`} key={portfolio.id}>
						<div className='pp-inner'>
							<div className={`pp-content ${isPopup && 'animation'}`}>
								<div className='pp-header'>
									<div className='btn pp-close' onClick={handleClose}>
										<FontAwesomeIcon icon={faTimes} />
									</div>
									<div className='pp-thumbnail'>
										<img
											src={portfolio.thumbnail}
											alt='Portfolio Thumbnail Imgae'
										/>
									</div>
									<h3>{portfolio.title}</h3>
								</div>
								<div className='pp-body'>
									<div className='description'>
										<p>{portfolio.description}</p>
									</div>
									<div className='general-info'>
										<ul>
											<li>
												Created - <span>{portfolio.createDate}</span>
											</li>
											<li>
												Technology used - <span>{portfolio.technologies}</span>
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
						</div>
					</div>
				))}
		</>
	);
};

export default PortfolioItem;
