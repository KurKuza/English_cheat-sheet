import { FunctionComponent } from 'preact'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

const Home: FunctionComponent = ({ children }) => {
  return (
    <Box className='wrapper'>
      <main className='page page-home'>
        <section className='tenses'>
          <Box className='tenses__container'>
            <Link to='/simple' className='tensec__link'>
              <Box className='tenses__box'>
                <Box className='tenses__text'>Simple</Box>
              </Box>
            </Link>
            <Link to='/continuous' className='tensec__link'>
              <Box className='tenses__box'>
                <Box className='tenses__text'>Continuous</Box>
              </Box>
            </Link>
            <Link to='/perfect' className='tensec__link'>
              <Box className='tenses__box'>
                <Box className='tenses__text'>Perfect</Box>
              </Box>
            </Link>
            <Link to='/perfectContinuous' className='tensec__link'>
              <Box className='tenses__box'>
                <Box className='tenses__text'>
                  Perfect
                  <br />
                  continuous
                </Box>
              </Box>
            </Link>
          </Box>
        </section>
        <section className='another'>
          <Box className='another__container'>
            <Link to='/passiveVoice' className='tensec__link'>
              <Box className='tenses__box another__box'>
                <Box className='tenses__text'>Passive voice</Box>
              </Box>
            </Link>
            <Link to='/irregularVerbs' className='tensec__link'>
              <Box className='tenses__box another__box'>
                <Box className='tenses__text'>Irregular verbs</Box>
              </Box>
            </Link>
            <Link to='/reduction' className='tensec__link'>
              <Box className='tenses__box another__box'>
                <Box className='tenses__text'>Reduction</Box>
              </Box>
            </Link>
            <Link to='/glueWords' className='tensec__link'>
              <Box className='tenses__box another__box'>
                <Box className='tenses__text'>Glue words</Box>
              </Box>
            </Link>
          </Box>
        </section>
      </main>
    </Box>
  )
}

export default Home
