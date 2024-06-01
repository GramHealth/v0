import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './redux';
import { HelmetProvider } from 'react-helmet-async';

import './assets/styles/index.css';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</Provider>
	</React.StrictMode>,
);
