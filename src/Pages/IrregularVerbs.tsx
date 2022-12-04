import { Box } from '@mui/material'
import { FunctionComponent } from 'preact'

import TableSearch from '../Components/TableSearch/TableSearch'
import IrregularList from '../Db/IrregularList.json'

const IrregularVerbs: FunctionComponent = () => {
  return (
    <main className='page page-verbs'>
      <section className='verbs'>
        <Box className='verbs'>
          <TableSearch />
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
                  <td>{verbs.pastSimple}</td>
                  <td>{verbs.pastParticiple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </section>
    </main>
  )
}

export default IrregularVerbs
