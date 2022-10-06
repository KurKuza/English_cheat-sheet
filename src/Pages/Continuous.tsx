import Spoiler from '../Components/Spoiler/Spoiler'
import { Box } from '@mui/material'

function Continuous() {
	return (
		<section className='tense-time'>
			<Spoiler />
			<Box data-spollers className='tense-time__container'>
				<Box
					data-da='.spollers__statement, 767'
					className='grid__tense additional-padding statement'>
					<Box className='grid__mark present-mark'>Pr</Box>
					<Box className='grid__pronouns grid-3-3'>
						<Box className='grid__pronouns-general'>I</Box>
						<Box className='grid__pronouns-3'>am</Box>
						<Box className='grid__verb stretching-3'>Ving</Box>
						<Box className='grid__pronouns-general'>
							You
							<br />
							We
							<br />
							They
						</Box>
						<Box className='grid__pronouns-3'>are</Box>
						<Box className='grid__pronouns-3'>
							He
							<br />
							She
							<br />
							It
						</Box>
						<Box className='grid__pronouns-3'>is</Box>
					</Box>
				</Box>
				<Box data-da='.spollers__denial, 767' className='grid__tense denial'>
					<Box className='grid__mark present-mark hide-mark'>Pr</Box>
					<Box className='grid__pronouns grid-3-3'>
						<Box className='grid__pronouns-general'>I</Box>
						<Box className='grid__pronouns-3'>am not</Box>
						<Box className='grid__verb stretching-3'>Ving</Box>
						<Box className='grid__pronouns-general'>
							You
							<br />
							We
							<br />
							They
						</Box>
						<Box className='grid__pronouns-3'>are not</Box>
						<Box className='grid__pronouns-3'>
							He
							<br />
							She
							<br />
							It
						</Box>
						<Box className='grid__pronouns-3'>is not</Box>
					</Box>
				</Box>
				<Box
					data-da='.spollers__question, 767'
					className='grid__tense question'>
					<Box className='grid__mark present-mark hide-mark'>Pr</Box>
					<Box className='grid__pronouns grid-3-3'>
						<Box className='grid__pronouns-3'>Am</Box>
						<Box className='grid__pronouns-general'>i</Box>
						<Box className='grid__verb stretching-3'>Ving?</Box>
						<Box className='grid__pronouns-3'>Are</Box>
						<Box className='grid__pronouns-general'>
							you
							<br />
							we
							<br />
							they
						</Box>
						<Box className='grid__pronouns-3'>Is</Box>
						<Box className='grid__pronouns-3'>
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
					data-da='.spollers__statement, 767'
					className='grid__tense additional-padding statement'>
					<Box className='grid__mark past-mark'>Pa</Box>
					<Box className='grid__pronouns colom-3'>
						<Box className='grid__pronouns-general'>
							I<br />
							You
							<br />
							We
							<br />
							They
						</Box>
						<Box className='grid__word-question'>was</Box>
						<Box className='grid__verb stretching'>Ving</Box>
						<Box className='grid__pronouns-general'>
							He
							<br />
							She
							<br />
							It
						</Box>
						<Box className='grid__word-question'>were</Box>
					</Box>
				</Box>
				<Box data-da='.spollers__denial, 767' className='grid__tense denial'>
					<Box className='grid__mark past-mark hide-mark'>Pa</Box>
					<Box className='grid__pronouns colom-3'>
						<Box className='grid__pronouns-general'>
							I<br />
							You
							<br />
							We
							<br />
							They
						</Box>
						<Box className='grid__word-question'>was not</Box>
						<Box className='grid__verb stretching'>Ving</Box>
						<Box className='grid__pronouns-general'>
							He
							<br />
							She
							<br />
							It
						</Box>
						<Box className='grid__word-question'>were not</Box>
					</Box>
				</Box>
				<Box
					data-da='.spollers__question, 767'
					className='grid__tense question'>
					<Box className='grid__mark past-mark hide-mark'>Pa</Box>
					<Box className='grid__pronouns colom-3'>
						<Box className='grid__word-question'>Was</Box>
						<Box className='grid__pronouns-general'>
							i<br />
							you
							<br />
							we
							<br />
							they
						</Box>
						<Box className='grid__verb stretching'>Ving?</Box>
						<Box className='grid__word-question'>Were</Box>
						<Box className='grid__pronouns-general'>
							he
							<br />
							she
							<br />
							it
						</Box>
					</Box>
				</Box>
				{/*Fu ---------------------------------------------------------------------- */}
				<Box
					data-da='.spollers__statement, 767'
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
						<Box className='grid__word-question'>will be</Box>
						<Box className='grid__verb'>Ving</Box>
					</Box>
				</Box>
				<Box data-da='.spollers__denial, 767' className='grid__tense denial'>
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
						<Box className='grid__word-question'>won't be</Box>
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
						<Box className='grid__word-question'>be</Box>
						<Box className='grid__verb'>Ving?</Box>
					</Box>
				</Box>
			</Box>
		</section>
	)
}

export default Continuous
