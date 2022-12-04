import { Box } from '@mui/system'
import { Fragment, FunctionComponent } from 'preact'

import Spoilers from '../Components/Spoiler/Spoilers'

const PassiveVoice: FunctionComponent = () => {
  return (
    <section className='tense-time'>
      <div className='tense-time__container'>
        <Spoilers statement={<Statement />} denial={<Denial />} question={<Question />} />
      </div>
    </section>
  )
}

const Statement: FunctionComponent = () => {
  return (
    <Fragment>
      <Box className='grid__tense additional-padding statement'>
        <Box className='grid__mark present-mark'>Pr</Box>
        <Box className='grid__pronouns grid__1-2'>
          <Box className='grid__pronouns-general'>
            am
            <br />
            is
            <br />
            are
          </Box>
          <Box className='grid__verb'>
            Ved
            <br />
            V3
          </Box>
        </Box>
      </Box>

      <Box className='grid__tense additional-padding statement'>
        <Box className='grid__mark past-mark'>Pa</Box>
        <Box className='grid__pronouns grid__1-2'>
          <Box className='grid__pronouns-general'>
            was
            <br />
            were
          </Box>
          <Box className='grid__verb'>
            Ved
            <br />
            V3
          </Box>
        </Box>
      </Box>

      <Box className='grid__tense additional-padding statement'>
        <Box className='grid__mark future-mark'>Fu</Box>
        <Box className='grid__pronouns grid__1-2'>
          <Box className='grid__pronouns-general'>will be</Box>
          <Box className='grid__verb'>
            Ved
            <br />
            V3
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}

const Denial: FunctionComponent = () => {
  return (
    <Fragment>
      <Box className='grid__tense denial'>
        <Box className='grid__mark present-mark hide-mark'>Pr</Box>
        <Box className='grid__pronouns colum-1-3'>
          <Box className='grid__pronouns-general'>
            am
            <br />
            is
            <br />
            are
          </Box>
          <Box className='grid__word-question'>being</Box>
          <Box className='grid__verb'>
            Ved
            <br />
            V3
          </Box>
        </Box>
      </Box>

      <Box className='grid__tense denial'>
        <Box className='grid__mark past-mark hide-mark'>Pa</Box>
        <Box className='grid__pronouns colum-1-3'>
          <Box className='grid__pronouns-general'>
            was
            <br />
            were
          </Box>
          <Box className='grid__word-question'>being</Box>
          <Box className='grid__verb'>
            Ved
            <br />
            V3
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}

const Question: FunctionComponent = () => {
  return (
    <Fragment>
      <Box className='grid__tense question'>
        <Box className='grid__mark present-mark hide-mark'>Pr</Box>
        <Box className='grid__pronouns colum-1-3'>
          <Box className='grid__pronouns-general'>
            have
            <br />
            has
          </Box>
          <Box className='grid__word-question'>been</Box>
          <Box className='grid__verb'>
            Ved
            <br />
            V3
          </Box>
        </Box>
      </Box>

      <Box className='grid__tense question'>
        <Box className='grid__mark past-mark hide-mark'>Pa</Box>
        <Box className='grid__pronouns colum-1-3'>
          <Box className='grid__pronouns-general'>had</Box>
          <Box className='grid__word-question'>been</Box>
          <Box className='grid__verb'>
            Ved
            <br />
            V3
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}

export default PassiveVoice
