import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import { FunctionComponent } from 'preact'

import TableSearch from '../Components/TableSearch/TableSearch'
import IrregularList from '../Db/IrregularList.json'
import IrregularListBase from '../Db/IrregularListBase.json'

const IrregularVerbs: FunctionComponent = () => {
  return (
    <main className='page page-verbs'>
      <section className='verbs'>
        <Box className='verbs' style={{ width: '100%', margin: '0 auto', maxWidth: '800px' }}>
          <TableSearch />

          {/* Аккордеон для IrregularListBase */}
          <Accordion defaultExpanded style={{ borderRadius: '16px', overflow: 'hidden' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel2a-content' id='panel2a-header'>
              <h4 style={{ color: '#8ac926' }}>Irregular Verbs Base</h4>
            </AccordionSummary>
            <AccordionDetails>
              <table className='irregular-verbs'>
                <thead>
                  <tr>
                    <th>Base form</th>
                    <th>Past tense</th>
                    <th>Past participle</th>
                  </tr>
                </thead>
                <tbody className='table'>
                  {IrregularListBase.irregular_verbs.map((verbs) => (
                    <tr key={verbs.base}>
                      <td>{verbs.base}</td>
                      <td>{verbs.past_simple}</td>
                      <td>{verbs.past_participle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AccordionDetails>
          </Accordion>

          {/* Аккордеон для IrregularList */}
          <Accordion style={{ borderRadius: '16px', overflow: 'hidden' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
              <h4 style={{ color: '#8ac926' }}>Irregular Verbs</h4>
            </AccordionSummary>
            <AccordionDetails>
              <table className='irregular-verbs'>
                <thead>
                  <tr>
                    <th>Base form</th>
                    <th>Past tense</th>
                    <th>Past participle</th>
                  </tr>
                </thead>
                <tbody className='table'>
                  {IrregularList.verbs.map((verbs) => (
                    <tr key={verbs.base}>
                      <td>{verbs.base}</td>
                      <td>{verbs.past_simple}</td>
                      <td>{verbs.past_participle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AccordionDetails>
          </Accordion>
        </Box>
      </section>
    </main>
  )
}

export default IrregularVerbs
