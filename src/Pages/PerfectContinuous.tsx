import Spoiler from '../Components/Spoiler/Spoiler'
import { Box } from '@mui/material'

function PerfectContinuous() {
	return (
		<section className='tense-time'>
			<Box data-spollers className='tense-time__container'>
				<Spoiler />
				<Box
					
					className='grid__tense additional-padding statement'>
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
					</Box>
				</Box>
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
				<Box
					data-da='.spollers__question, 767'
					className='grid__tense question'>
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
				{/*Pa ---------------------------------------------------------------------- */}
				<Box
					
					className='grid__tense additional-padding statement'>
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
				<Box
					data-da='.spollers__question, 767'
					className='grid__tense question'>
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
				{/*Fu ---------------------------------------------------------------------- */}
				<Box
					
					className='grid__tense additional-padding statement'>
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
				<Box
					data-da='.spollers__question, 767'
					className='grid__tense question'>
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
			</Box>
		</section>
	)
}

export default PerfectContinuous
