import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { AccordionDetails } from '@mui/material'
import { Fragment, FunctionComponent } from 'preact'
import { AccordionContainer } from './styles/Accordion'
import { AccordionSummaryC } from './styles/AccordionSummaryC'

type SpoilersProps = {
	statement: ReactJSXElement
	denial: ReactJSXElement
	quention: ReactJSXElement
}
const Spoilers: FunctionComponent<SpoilersProps> = ({
	statement: statement,
	denial,
	quention,
}) => {
	return (
		<Fragment>
			<AccordionContainer disableGutters expanded>
				<AccordionSummaryC aria-controls='panel1a-content'>+</AccordionSummaryC>
				<AccordionDetails>{statement}</AccordionDetails>
			</AccordionContainer>
			<AccordionContainer disableGutters expanded>
				<AccordionSummaryC aria-controls='panel1a-content'>-</AccordionSummaryC>
				<AccordionDetails>{denial}</AccordionDetails>
			</AccordionContainer>
			<AccordionContainer disableGutters expanded>
				<AccordionSummaryC aria-controls='panel1a-content'>?</AccordionSummaryC>
				<AccordionDetails>{quention}</AccordionDetails>
			</AccordionContainer>
		</Fragment>
	)
}

export default Spoilers
