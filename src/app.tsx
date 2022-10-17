import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { useState } from 'preact/hooks'
import { Route, Routes } from 'react-router-dom'
import './app.css'

import { Header } from './Components/Header/Header'
import Continuous from './Pages/Continuous'
import Home from './Pages/Home'
import IrregularVerbs from './Pages/IrregularVerbs'
import PassiveVoice from './Pages/PassiveVoice'
import Perfect from './Pages/Perfect'
import PerfectContinuous from './Pages/PerfectContinuous'
import Reduction from './Pages/Reduction'
import Simple from './Pages/Simple'
import baseroute from './baseroute'

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const light = {
    palette: {
      mode: 'light',
    },
  }
  /*  */
  const dark = {
    palette: {
      mode: 'dark',
    },
  }
  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      {/* <CssBaseline /> */}
      <Routes>
        <Route path={`${baseroute}/`} element={<Header />}>
          <Route path={`${baseroute}`} element={<Home />} />
          <Route path={`${baseroute}/simple`} element={<Simple />} />
          <Route path={`${baseroute}/continuous`} element={<Continuous />} />
          <Route path={`${baseroute}/perfect`} element={<Perfect />} />
          <Route path={`${baseroute}/perfectContinuous`} element={<PerfectContinuous />} />
          <Route path={`${baseroute}/passiveVoice`} element={<PassiveVoice />} />
          <Route path={`${baseroute}/irregularVerbs`} element={<IrregularVerbs />} />
          <Route path={`${baseroute}/Reduction`} element={<Reduction />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
