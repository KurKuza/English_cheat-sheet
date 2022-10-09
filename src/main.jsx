import { render } from 'preact'
import { HashRouter } from 'react-router-dom'
import { App } from './app'
import './index.css'



render(
  <HashRouter basename='/'>
      <App />
  </HashRouter>,
  document.getElementById('app'),
)
