import { render } from 'preact'
import { App } from './app'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { createTheme, CssBaseline } from '@mui/material'

import { ThemeContext, ThemeProvider } from '@emotion/react'
const darkTheme = createTheme({
	palette: {
		mode: 'light',
	},
})
render(
	<HashRouter basename='/'>
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</HashRouter>,
	document.getElementById('app'),
)
