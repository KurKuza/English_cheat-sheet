import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { Fragment, FunctionComponent } from 'preact'
import { AccordionContainer } from './styles/AccordionContainer'
import { AccordionDetailsC } from './styles/AccordionDetailsC'
import { AccordionSummaryC } from './styles/AccordionSummaryC'

type SpoilersProps = {
  statement: ReactJSXElement
  denial: ReactJSXElement
  quention: ReactJSXElement
}
const Spoilers: FunctionComponent<SpoilersProps> = ({ statement, denial, quention }) => {
  return (
    <Fragment>
      <AccordionContainer disableGutters expanded>
        <AccordionSummaryC aria-controls='panel1a-content' style={{ color: '#8ac926' }}>
          +
        </AccordionSummaryC>
        <AccordionDetailsC>{statement}</AccordionDetailsC>
      </AccordionContainer>
      <AccordionContainer disableGutters expanded>
        <AccordionSummaryC aria-controls='panel1a-content' style={{ color: '#ff595e' }}>
          −
        </AccordionSummaryC>
        <AccordionDetailsC>{denial}</AccordionDetailsC>
      </AccordionContainer>
      <AccordionContainer disableGutters expanded>
        <AccordionSummaryC aria-controls='panel1a-content' style={{ color: '#1982c4' }}>
          ?
        </AccordionSummaryC>
        <AccordionDetailsC>{quention}</AccordionDetailsC>
      </AccordionContainer>
    </Fragment>
  )
}

export default Spoilers
