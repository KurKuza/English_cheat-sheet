import {
	Accordion,
	AccordionDetails,
	Box,
	Button,
	Typography,
} from '@mui/material'
import { FunctionComponent } from 'preact'
import { AccordionContainer } from './AccordionContainer'
import { AccordionSummaryContainer } from './AccordionSummaryContainer'
import useSpoilerLogic from './useSpoilerLogic'

// type SpoilerProps = {
// 	statement?: Component
// }
{
	/* <SpoilerProps> */
}
const Spoiler: FunctionComponent = (props) => {
	useSpoilerLogic()
	return (
		<>
			<AccordionContainer>
				<AccordionSummaryContainer
					style={{ alignItems: 'center', flexGrow: 0 }}>
					<Button
						className='spollers__item marks__say green'
						type='button'
						data-spoller>
						<Typography fontSize={'3rem'}>+</Typography>
					</Button>
				</AccordionSummaryContainer>
				<AccordionDetails>
					<Box
						
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
				</AccordionDetails>
			</AccordionContainer>
			<Button
				className='spollers__item marks__say green'
				type='button'
				data-spoller>
				<Typography fontSize={'3rem'}>+</Typography>
			</Button>
			<Button className='spollers__item marks__say red'>
				−
				<Box className='spollers__denial' />
			</Button>
			<Button className='spollers__item marks__say blue'>
				?
				<Box className='spollers__question' />
			</Button>
		</>
	)
}
export default Spoiler
