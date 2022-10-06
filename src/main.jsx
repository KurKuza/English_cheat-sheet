import { render } from 'preact'
import { App } from './app'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { createTheme, CssBaseline } from '@mui/material'

import { ThemeContext, ThemeProvider } from '@emotion/react'
import { purple } from '@mui/material/colors'
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});
render(
	<HashRouter basename='/'>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</HashRouter>,
	document.getElementById('app'),
)
