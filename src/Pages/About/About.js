import React, { useEffect, useState } from 'react';
import Me from '../../assets/img/me.png';
import { skills, educations, experiences } from '../../Data/data';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const About = () => {
	const [activeTab, setActiveTab] = useState('education');
	const navigate = useNavigate();
	const handleActiveTab = (tab) => {
		setActiveTab(tab);
	};
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
			<section className='about-section sec-padding'>
				<div className='container'>
					<div className='row'>
						<div className='section-title'>
							<h2>About Me</h2>
						</div>
					</div>
					<div className='row'>
						<div className='about-img'>
							<div className='img-box'>
								<img src={Me} alt='Sachin Rathee' />
							</div>
						</div>
						<div className='about-text'>
							<p>
								In publishing and graphic design, Lorem ipsum is a placeholder
								text commonly used to demonstrate the visual form of a document
								or a typeface without relying on meaningful content. Lorem ipsum
								may be used as a placeholder before the final copy is available.
							</p>
							<h3>Skills</h3>
							<div className='skills'>
								{skills.map((skill) => (
									<div key={skill.id} className='skill-item'>
										{skill.name}
									</div>
								))}
							</div>
							<div className='about-tabs'>
								<button
									type='button'
									className={`${
										activeTab === 'education' && 'active'
									} tab-item`}
									onClick={() => handleActiveTab('education')}>
									Education
								</button>
								<button
									type='button'
									className={`${
										activeTab === 'experience' && 'active'
									} tab-item`}
									onClick={() => handleActiveTab('experience')}>
									Experience
								</button>
							</div>

							{/* ----------------------Education starts----------------- */}
							<div
								className={`${
									activeTab === 'education' && 'active'
								} tab-content`}>
								<div className='timeline'>
									{educations.map((education) => (
										<div className='timeline-item' key={education.id}>
											<span className='date'>{education.date}</span>
											<h4>
												{education.degree} - <span>{education.university}</span>
											</h4>
											<p>{education.para}</p>
										</div>
									))}
								</div>
							</div>
							{/* ----------------------Education end----------------- */}

							{/* ----------------------Experience starts----------------- */}
							<div
								className={`${
									activeTab === 'experience' && 'active'
								} tab-content`}>
								<div className='timeline'>
									{experiences.map((experience) => (
										<div className='timeline-item' key={experience.id}>
											<span className='date'>{experience.date}</span>
											<h4>
												{experience.designation} -{' '}
												<span>{experience.company}</span>
											</h4>
											<p>{experience.para}</p>
										</div>
									))}
								</div>
							</div>
							{/* ----------------------Experience end----------------- */}
							<a href='https://www.google.com' target='_blank' className='btn'>
								download CV
							</a>
							<Link to='/contact' className='btn'>
								Contact Me
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
