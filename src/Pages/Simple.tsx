import { Box } from '@mui/material'
import { Fragment, FunctionComponent } from 'preact'
import Spoilers from '../Components/Spoiler/Spoilers'

function Simple() {
  return (
    <section className='tense-time'>
      <Box data-spollers className='tense-time__container'>
        <Spoilers statement={<Statement />} denial={<Denial />} quention={<Question />} />
      </Box>
    </section>
  )
}

const Statement: FunctionComponent = () => {
  return (
    <Fragment>
      <Box className='grid__tense additional-padding statement'>
        <Box className='grid__mark present-mark'>Pr</Box>
        <Box className='grid__pronouns'>
          <Box className='grid__pronouns-general'>
            I<br />
            You
            <br />
            We
            <br />
            They
          </Box>
          <Box className='grid__verb'>V</Box>
          <Box className='grid__pronouns-3'>
            He
            <br />
            She
            <br />
            It
          </Box>
          <Box className='grid__verb'>Vs</Box>
        </Box>
      </Box>
      <Box className='grid__tense additional-padding statement'>
        <Box className='grid__mark past-mark'>Pa</Box>
        <Box className='grid__pronouns colom-1'>
          <Box className='grid__pronouns-general'>
            I<br />
            You
            <br />
            We
            <br />
            They
            <br />
            He
            <br />
            She
            <br />
            It
          </Box>
          <Box className='grid__verb'>
            Ved
            <br />
            <span>V2</span>
          </Box>
        </Box>
      </Box>
      <Box className='grid__tense additional-padding statement'>
        <Box className='grid__mark future-mark'>Fu</Box>
        <Box className='grid__pronouns colom-1-3'>
          <Box className='grid__pronouns-general'>
            I<br />
            You
            <br />
            We
            <br />
            They
            <br />
            He
            <br />
            She
            <br />
            It
          </Box>
          <Box className='grid__word-question'>will</Box>
          <Box className='grid__verb'>Ved</Box>
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
        <Box className='grid__pronouns colom-3'>
          <Box className='grid__pronouns-general'>
            I<br />
            You
            <br />
            We
            <br />
            They
          </Box>
          <Box className='grid__denial'>don't</Box>
          <Box className='grid__verb stretching'>V</Box>
          <Box className='grid__pronouns-3'>
            He
            <br />
            She
            <br />
            It
          </Box>
          <Box className='grid__denial'>doesn't</Box>
        </Box>
      </Box>

      <Box className='grid__tense denial'>
        <Box className='grid__mark past-mark hide-mark'>Pa</Box>
        <Box className='grid__pronouns colom-1-3'>
          <Box className='grid__pronouns-general'>
            I<br />
            You
            <br />
            We
            <br />
            They
            <br />
            He
            <br />
            She
            <br />
            It
          </Box>
          <Box className='grid__word-question'>didn’t</Box>
          <Box className='grid__verb'>V</Box>
        </Box>
      </Box>
      <Box className='grid__tense denial'>
        <Box className='grid__mark future-mark hide-mark'>Fu</Box>
        <Box className='grid__pronouns colom-1-3'>
          <Box className='grid__pronouns-general'>
            I<br />
            You
            <br />
            We
            <br />
            They
            <br />
            He
            <br />
            She
            <br />
            It
          </Box>
          <Box className='grid__word-question'>won't</Box>
          <Box className='grid__verb'>V</Box>
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
        <Box className='grid__pronouns colom-3'>
          <Box className='grid__word-question'>Do</Box>
          <Box className='grid__pronouns-general'>
            i<br />
            you
            <br />
            we
            <br />
            they
          </Box>
          <Box className='grid__verb stretching'>V?</Box>
          <Box className='grid__word-question'>Does</Box>
          <Box className='grid__pronouns-3 '>
            he
            <br />
            she
            <br />
            it
          </Box>
        </Box>
      </Box>
      <Box className='grid__tense question'>
        <Box className='grid__mark past-mark hide-mark'>Pa</Box>
        <Box className='grid__pronouns colom-1-3'>
          <Box className='grid__word-question'>Did</Box>
          <Box className='grid__pronouns-general'>
            i<br />
            you
            <br />
            we
            <br />
            they
            <br />
            he
            <br />
            she
            <br />
            it
          </Box>
          <Box className='grid__verb'>V?</Box>
        </Box>
      </Box>

      <Box className='grid__tense question'>
        <Box className='grid__mark future-mark hide-mark'>Fu</Box>
        <Box className='grid__pronouns colom-1-3'>
          <Box className='grid__word-question'>Will</Box>
          <Box className='grid__pronouns-general'>
            i<br />
            you
            <br />
            we
            <br />
            they
            <br />
            he
            <br />
            she
            <br />
            it
          </Box>
          <Box className='grid__verb'>V?</Box>
        </Box>
      </Box>
    </Fragment>
  )
}

export default Simple
