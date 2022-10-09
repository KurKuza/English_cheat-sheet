import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { useState } from 'react'

import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import { Fragment } from 'preact'
import { Link, Outlet } from 'react-router-dom'
import { AppBarC } from './styles/AppBarC'

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
export function Header() {
  const [open, setState] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  console.log('🚀 window.innerWidth', window.innerWidth)
  if (window.innerWidth <= 768) {
    setIsTablet(true)
  }
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState(open)
  }

  return (
    <Fragment>
      <AppBarC position='static'>
        <Box className='header__container'>
          <Toolbar>
            {!isTablet ? (
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
                          textTransform: 'capitalize',
                        }}
                      >
                        <Link to={page.path} className='menu__link'>
                          {page.name}
                        </Link>
                      </Button>
                    </li>
                  ))}
                  <li className='menu__item'></li>
                </ul>
              </nav>
            ) : (
              <Fragment>
                <IconButton edge='end' color='primary' aria-label='open drawer' onClick={toggleDrawer(true)}>
                  <MenuIcon fontSize='large' />
                </IconButton>

                <Drawer anchor='right' open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
                  <Box>
                    {pages.map((page) => (
                      <div key={page.name} className='menu__item'>
                        <Button
                          variant='text'
                          size='large'
                          sx={{ fontSize: '1rem', fontWeight: 500, textTransform: 'capitalize', width: '100%' }}
                        >
                          <Link to={page.path}>{page.name}</Link>
                        </Button>
                      </div>
                    ))}
                  </Box>
                </Drawer>
              </Fragment>
            )}
          </Toolbar>
        </Box>
      </AppBarC>
      <Outlet />
    </Fragment>
  )
}
