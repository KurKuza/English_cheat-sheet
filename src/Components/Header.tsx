import { Button } from '@mui/material'
import { FunctionComponent } from 'preact'
import { Link, Outlet } from 'react-router-dom'

const pages = [
	{ name: 'Main', path: '/' },
	{ name: 'Simple', path: '/simple' },
	{ name: 'Continuous', path: '/continuous' },
	{ name: 'Perfect', path: '/perfect' },
	{ name: 'Perfect Continuous', path: '/perfectContinuous' },
	{ name: 'Passive voice', path: '/passiveVoice' },
	{ name: 'Irregular verbs', path: '/irregularVerbs' },
	{ name: 'Reduction', path: '/reduction' },
]

export const Header: FunctionComponent = () => {
	return (
		<>
			<header className='header'>
				<div className='header__container'>
					<div className='header__menu menu'>
						<nav className='menu__body'>
							<ul className='menu__list'>
								{pages.map((page) => (
									<li className='menu__item'>
										<Button
											variant='text'
											size='large'
											sx={{
												fontSize: '1rem',
												fontWeight: 500,
												color: '#fff',
												textTransform: 'capitalize',
											}}>
											<Link to={page.path} className='menu__link'>
												{page.name}
											</Link>
										</Button>
									</li>
								))}
								<li className='menu__item'></li>
							</ul>
							<button type='button' className='menu__icon icon-menu'>
								<span />
							</button>
						</nav>
					</div>
				</div>
			</header>
			<Outlet />
		</>
	)
}
