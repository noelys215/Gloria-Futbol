import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<StyledEngineProvider>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</StyledEngineProvider>,
	document.getElementById('root')
);
