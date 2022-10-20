import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { FunctionComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { useIsTablet } from '../../Hooks/useIsTablet'
import { AccordionContainer } from './styles/AccordionContainer'
import { AccordionDetailsC } from './styles/AccordionDetailsC'
import { AccordionSummaryC } from './styles/AccordionSummaryC'

type SpoilersProps = {
  statement: ReactJSXElement
  denial: ReactJSXElement
  quention: ReactJSXElement
}
const Spoilers: FunctionComponent<SpoilersProps> = ({ statement, denial, quention }) => {
  const [open, setOpen] = useState(true)
  const [open2, setOpen2] = useState(true)
  const [open3, setOpen3] = useState(true)

  return (
    <>
      <AccordionContainer disableGutters expanded={open} onClick={() => setOpen(!open)}>
        <AccordionSummaryC style={{ color: '#8ac926' }}>+</AccordionSummaryC>
        <AccordionDetailsC>{statement}</AccordionDetailsC>
      </AccordionContainer>
      <AccordionContainer disableGutters expanded={open2} onClick={() => setOpen2(!open2)}>
        <AccordionSummaryC style={{ color: '#ff595e' }}>−</AccordionSummaryC>
        <AccordionDetailsC>{denial}</AccordionDetailsC>
      </AccordionContainer>
      <AccordionContainer disableGutters expanded={open3} onClick={() => setOpen3(!open3)}>
        <AccordionSummaryC style={{ color: '#1982c4' }}>?</AccordionSummaryC>
        <AccordionDetailsC>{quention}</AccordionDetailsC>
      </AccordionContainer>
    </>
  )
}

export default Spoilers
