import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faInstagram,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';

const Contact = () => {
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
			<section className='contact-section'>
				<div className='container'>
					<div className='row'>
						<div className='section-title'>
							<h2>Contact Me</h2>
						</div>
					</div>
					<div className='row'>
						<div className='contact-form'>
							<form>
								<div className='row'>
									<div className='input-group'>
										<input
											type='text'
											placeholder='Name'
											className='input-control'
											required
										/>
									</div>
									<div className='input-group'>
										<input
											type='text'
											placeholder='Email'
											className='input-control'
											required
										/>
									</div>
									<div className='input-group'>
										<input
											type='text'
											placeholder='Subject'
											className='input-control'
											required
										/>
									</div>
									<div className='input-group'>
										<textarea
											placeholder='Message'
											className='input-control'
											required
										/>
									</div>
									<div className='submit-btn'>
										<button type='button' className='btn'>
											send message
										</button>
									</div>
								</div>
							</form>
						</div>
						<div className='contact-info'>
							<div className='contact-info-item'>
								<h3>Email</h3>
								<p>sachin.rathee.mail@gmail.com</p>
							</div>
							<div className='contact-info-item'>
								<h3>Phone</h3>
								<p>+91 8427514840</p>
							</div>
							<div className='contact-info-item'>
								<h3>Follow Me</h3>
								<div className='social-links'>
									<a href='#' target='_blank'>
										<FontAwesomeIcon icon={faFacebookF} />
									</a>
									<a href='#' target='_blank'>
										<FontAwesomeIcon icon={faInstagram} />
									</a>
									<a href='#' target='_blank'>
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Contact;
