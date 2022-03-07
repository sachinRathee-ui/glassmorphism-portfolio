import React, { useEffect, useState } from 'react';
import './theme.css';
import { FiSettings } from 'react-icons/fi';

const ThemeOptions = ({ handleTheme }) => {
	return (
		<div className='themes' id='themes'>
			<div className='setting__icon'>
				<FiSettings className='icon' />
			</div>
			<div className='theme-options'>
				<div
					className='theme__option'
					onClick={() => handleTheme('first-theme')}>
					<div className='bg__color theme-first-bg'></div>
					<div className='primary__color theme-first-primary'></div>
				</div>
				<div
					className='theme__option'
					onClick={() => handleTheme('second-theme')}>
					<div className='bg__color theme-second-bg'></div>
					<div className='primary__color theme-second-primary'></div>
				</div>
				<div
					className='theme__option'
					onClick={() => handleTheme('third-theme')}>
					<div className='bg__color theme-third-bg'></div>
					<div className='primary__color theme-third-primary'></div>
				</div>

				<div
					className='theme__option'
					onClick={() => handleTheme('fourth-theme')}>
					<div className='bg__color theme-fourth-bg'></div>
					<div className='primary__color theme-fourth-primary'></div>
				</div>
			</div>
		</div>
	);
};

export default ThemeOptions;
