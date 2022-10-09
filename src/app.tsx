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
        <Route path='/' element={<Header />}>
          <Route path='' element={<Home />} />
          <Route path='simple' element={<Simple />} />
          <Route path='continuous' element={<Continuous />} />
          <Route path='perfect' element={<Perfect />} />
          <Route path='perfectContinuous' element={<PerfectContinuous />} />
          <Route path='passiveVoice' element={<PassiveVoice />} />
          <Route path='irregularVerbs' element={<IrregularVerbs />} />
          <Route path='Reduction' element={<Reduction />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
