import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './responsive.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={Store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
