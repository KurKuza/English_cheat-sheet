import { Route, Routes } from 'react-router-dom'
import './app.css'
import { Header } from './Components/Header'
import Continuous from './Pages/Continuous'
import Home from './Pages/Home'
import Perfect from './Pages/Perfect'
import PerfectContinuous from './Pages/PerfectContinuous'
import Simple from './Pages/Simple'

export function App() {
	return (
		<Routes>
			<Route path='/' element={<Header />}>
				<Route path='' element={<Home />} />
				<Route path='simple' element={<Simple />} />
				<Route path='continuous' element={<Continuous />} />
				<Route path='perfect' element={<Perfect />} />
				<Route path='perfectContinuous' element={<PerfectContinuous />} />
			</Route>
		</Routes>
	)
}
