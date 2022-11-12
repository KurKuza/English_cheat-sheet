import './index.css'

import { render } from 'preact'
import { HashRouter } from 'react-router-dom'

import { App } from './app'

render(
  <HashRouter basename='/'>
    <App />
  </HashRouter>,
  document.getElementById('app'),
)
