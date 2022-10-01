import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { AccordionDetails } from '@mui/material'
import { Fragment, FunctionComponent } from 'preact'
import { AccordionContainer } from './styles/Accordion'
import { AccordionSummaryC } from './styles/AccordionSummaryC'

type SpoilersProps = {
	statements: ReactJSXElement
	denial: ReactJSXElement
	quention: ReactJSXElement
}
const Spoilers: FunctionComponent<SpoilersProps> = ({
	statements,
	denial,
	quention,
}) => {
	return (
		<Fragment>
			<AccordionContainer disableGutters expanded>
				<AccordionSummaryC aria-controls='panel1a-content'>+</AccordionSummaryC>
				<AccordionDetails>{statements}</AccordionDetails>
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
