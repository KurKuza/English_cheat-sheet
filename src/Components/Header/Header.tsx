import MenuIcon from '@mui/icons-material/Menu'
import { Box, IconButton, Toolbar } from '@mui/material'
import { useState } from 'react'

import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import { Fragment } from 'preact'
import { Link, Outlet } from 'react-router-dom'
import { AppBarC } from './styles/AppBarC'

const pages: { name: string; path: string }[] = [
  { name: 'Main', path: '/' },
  { name: 'Simple', path: '/simple' },
  { name: 'Continuous', path: '/continuous' },
  { name: 'Perfect', path: '/perfect' },
  { name: 'Perfect Continuous', path: '/perfectContinuous' },
  { name: 'Passive voice', path: '/passiveVoice' },
  { name: 'Irregular verbs', path: '/irregularVerbs' },
  { name: 'Reduction', path: '/reduction' },
  { name: 'Glue words', path: '/glueWords' },
]
export function Header() {
  const [open, setState] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

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
      <Box className='wrapper__container'>
        <AppBarC position='static'>
          <Box className='header__container'>
            <Toolbar disableGutters>
              {!isTablet ? (
                <nav className='menu__body'>
                  <ul className='menu__list'>
                    {pages.map(({ name, path }) => (
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
                          <Link to={path} className='menu__link'>
                            {name}
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
                      {pages.map(({ name, path }) => (
                        <div key={name} className='menu__item'>
                          <Button
                            variant='text'
                            size='large'
                            sx={{ fontSize: '1rem', fontWeight: 500, textTransform: 'capitalize', width: '100%' }}
                          >
                            <Link to={path}>{name}</Link>
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
      </Box>
      <Outlet />
    </Fragment>
  )
}
