import { render } from 'preact'
import { App } from './app'
import './index.css'
import { HashRouter } from 'react-router-dom'

render(
	<HashRouter basename='/'>
		<App />
	</HashRouter>,
	document.getElementById('app'),
)
