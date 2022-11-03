import { Box } from '@mui/system'
import { Fragment, FunctionComponent } from 'preact'
import Spoilers from '../Components/Spoiler/Spoilers'
import VerbTimeline from '../Components/VerbTimeline/Verbtimeline'

const perfectContinuous: FunctionComponent = () => {
  return (
    <section className='tense-time'>
      <div className='tense-time__container'>
        <Spoilers statement={<Statement />} denial={<Denial />} quention={<Question />} />
      </div>
    </section>
  )
}

const Statement: FunctionComponent = () => {
  return (
    <Fragment>
      <Box className='grid__tense additional-padding statement'>
        <Box className='grid__mark present-mark'>Pr</Box>
        <Box className='grid__pronouns colom-3'>
          <Box className='grid__pronouns-general'>
            I<br />
            You
            <br />
            We
            <br />
            They
          </Box>
          <Box className='grid__word-question'>have been</Box>
          <Box className='grid__verb stretching'>Ving</Box>
          <Box className='grid__pronouns-general'>
            He
            <br />
            She
            <br />
            It
          </Box>
          <Box className='grid__word-question'>has been</Box>
          <VerbTimeline src='public/assets/icons/perfectContinuousPresent.svg' />
        </Box>
      </Box>

      <Box className='grid__tense additional-padding statement'>
        <Box className='grid__mark past-mark'>Pa</Box>
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
          <Box className='grid__word-question'>had been</Box>
          <Box className='grid__verb'>Ving</Box>
        </Box>
        <VerbTimeline src='public/assets/icons/perfectContinuousPast.svg' />
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
          <Box className='grid__word-question'>will have been</Box>
          <Box className='grid__verb'>Ving</Box>
        </Box>
        <VerbTimeline src='public/assets/icons/perfectContinuousFuture.svg' />
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
          <Box className='grid__word-question'>have not been</Box>
          <Box className='grid__verb stretching'>Ving</Box>
          <Box className='grid__pronouns-general'>
            He
            <br />
            She
            <br />
            It
          </Box>
          <Box className='grid__word-question'>has not been</Box>
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
          <Box className='grid__word-question'>had not been</Box>
          <Box className='grid__verb'>Ving</Box>
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
          <Box className='grid__word-question'>won't have been</Box>
          <Box className='grid__verb'>Ving</Box>
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
        <Box className='grid__pronouns grid-2-4'>
          <Box className='grid__word-question'>Have</Box>
          <Box className='grid__pronouns-general'>
            i<br />
            you
            <br />
            we
            <br />
            they
          </Box>
          <Box className='grid__word-question stretching'>been</Box>
          <Box className='grid__verb stretching'>Ving?</Box>
          <Box className='grid__word-question'>Has</Box>
          <Box className='grid__pronouns-general'>
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
        <Box className='grid__pronouns grid-1-4'>
          <Box className='grid__word-question'>Had</Box>
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
          <Box className='grid__word-question'>been</Box>
          <Box className='grid__verb'>Ving?</Box>
        </Box>
      </Box>

      <Box className='grid__tense question'>
        <Box className='grid__mark future-mark hide-mark'>Fu</Box>
        <Box className='grid__pronouns grid-1-4'>
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
          <Box className='grid__word-question'>have been</Box>
          <Box className='grid__verb'>Ving?</Box>
        </Box>
      </Box>
    </Fragment>
  )
}

export default perfectContinuous
