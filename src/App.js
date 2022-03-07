import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import { Routes, Route } from 'react-router-dom';
import PortfolioItem from './Pages/Portfolio/PortfolioItem/PortfolioItem';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Circles from './Components/Circles/Circles';
import Loader from './Components/Loader/Loader';
import ThemeOptions from './Components/theme/ThemeOptions';
function App() {
	const [isLoading, steIsLoading] = useState(true);
	const [theme, setTheme] = useState('first-theme');

	useEffect(() => {
		const loading = setTimeout(() => {
			steIsLoading(false);
		}, 1000);
		// check for selected Theme in local storage value
		const currentTheme = localStorage.getItem('theme');
		// if found set selected value in state
		if (currentTheme) {
			setTheme(currentTheme);
		} else {
			localStorage.setItem('theme', 'first-theme');
		}
		return () => {
			clearTimeout(loading);
		};
	}, []);

	// console.log(theme);

	const handleTheme = (themeColor) => {
		setTheme(themeColor);
		localStorage.setItem('theme', themeColor);
	};

	return (
		<div className='App' data-theme={theme ? theme : 'first-theme'}>
			<Circles />
			<ThemeOptions handleTheme={handleTheme} />

			{isLoading ? (
				<Loader />
			) : (
				<div className='main-content'>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/portfolio' element={<Portfolio />}>
							<Route path=':id' element={<PortfolioItem />} />
						</Route>
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</div>
			)}
		</div>
	);
}

export default App;
