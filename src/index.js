import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './css/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './css/index.css';

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);
