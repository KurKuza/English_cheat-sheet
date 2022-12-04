import MenuIcon from '@mui/icons-material/Menu'
import { Box, IconButton, Toolbar } from '@mui/material'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { useIsTablet } from '../../Hooks/isTablet'
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
  const isTablet = useIsTablet()
  const [toggle, setToggle] = useState(false)

  const toggleDrawer = (toggle) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setToggle(toggle)
  }

  return (
    <>
      <Box className='wrapper__container'>
        <AppBarC position='static'>
          <Box className='header__container'>
            <Toolbar disableGutters>
              {!isTablet ? (
                <nav className='menu__body'>
                  <ul className='menu__list'>
                    {pages.map(({ name, path }) => (
                      <li className='menu__item' key={name}>
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
                    <li className='menu__item' />
                  </ul>
                </nav>
              ) : (
                <>
                  <IconButton edge='end' color='primary' aria-label='open drawer' onClick={toggleDrawer(true)}>
                    <MenuIcon fontSize='large' />
                  </IconButton>
                  <Drawer anchor='right' open={toggle} onClick={() => setToggle(!toggle)}>
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
                </>
              )}
            </Toolbar>
          </Box>
        </AppBarC>
      </Box>
      <Outlet />
    </>
  )
}
