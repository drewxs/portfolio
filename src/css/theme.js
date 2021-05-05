import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const themeFile = {
	palette: {
		primary: {
			main: '#121212',
			contrastText: '#959b9b',
		},
		secondary: {
			main: '#422a2a',
			contrastText: '#959b9b',
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
		spacing: 2,
	},
};

const theme = createMuiTheme(themeFile);

export default theme;
