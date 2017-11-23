// @flow weak

import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
/*
import green from 'material-ui/colors/green';
import blue from 'material-ui/colors/blue';
*/

import App from "./App";


const theme = createMuiTheme({

	palette: {
		/*cat: blue, // Purple and green play nicely together.
		secondary: {
			...green,
			A400: '#00e677',
		}*/
		type:'dark'
	}
});

function AppSkinned() {
	return (
		<MuiThemeProvider theme={theme}>
			<App></App>
		</MuiThemeProvider>
	);
}

export default AppSkinned;