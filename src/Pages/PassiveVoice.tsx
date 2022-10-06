import { FunctionComponent } from 'preact'
import Spoiler from '../Components/Spoiler/Spoiler'
import { Box } from '@mui/material'

const PassiveVoice: FunctionComponent = () => {
	return (
		<main className='page page-passive'>
			<section className='tense-time'>
				<Box data-spollers className='tense-time__container'>
					<Spoiler />
					{/*Pr ----------------------------------------------------------------------------------------------------- */}
					{/* <Box
						data-da='.spollers__statement, 767'
						className='grid__tense additional-padding statement'>
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
					</Box> */}
					<Box className='grid__tense denial'>
						<Box className='grid__mark present-mark hide-mark'>Pr</Box>
						<Box className='grid__pronouns colom-1-3'>
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
					<Box
						data-da='.spollers__question, 767'
						className='grid__tense question'>
						<Box className='grid__mark present-mark hide-mark'>Pr</Box>
						<Box className='grid__pronouns colom-1-3'>
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
					{/*Pa ---------------------------------------------------------------------- */}
					{/* <Box
						data-da='.spollers__statement, 767'
						className='grid__tense additional-padding statement'>
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
					</Box> */}
					<Box className='grid__tense denial'>
						<Box className='grid__mark past-mark hide-mark'>Pa</Box>
						<Box className='grid__pronouns colom-1-3'>
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
					<Box
						data-da='.spollers__question, 767'
						className='grid__tense question'>
						<Box className='grid__mark past-mark hide-mark'>Pa</Box>
						<Box className='grid__pronouns colom-1-3'>
							<Box className='grid__pronouns-general'>had</Box>
							<Box className='grid__word-question'>been</Box>
							<Box className='grid__verb'>
								Ved
								<br />
								V3
							</Box>
						</Box>
					</Box>
					{/*Fu ---------------------------------------------------------------------- */}
					{/* <Box
						data-da='.spollers__statement, 767'
						className='grid__tense additional-padding statement'>
						<Box className='grid__mark future-mark'>Fu</Box>
						<Box className='grid__pronouns grid__1-2'>
							<Box className='grid__pronouns-general'>will be</Box>
							<Box className='grid__verb'>
								Ved
								<br />
								V3
							</Box>
						</Box>
					</Box> */}
				</Box>
			</section>
		</main>
	)
}
export default PassiveVoice

export function Statement() {
	return (
		<>
			<Box
				className='grid__tense additional-padding statement'>
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
			<Box
				className='grid__tense additional-padding statement'>
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
			<Box
				className='grid__tense additional-padding statement'>
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
		</>
	)
}
