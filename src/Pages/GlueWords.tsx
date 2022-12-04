import { Box } from '@mui/material'
import { FunctionComponent } from 'preact'

import TableSearch from '../Components/TableSearch/TableSearch'
import GlueWordsList from '../Db/GlueWordsList.json'
import { usePageLogic } from '../Hooks/pageLogic'

const GlueWords: FunctionComponent = () => {
  usePageLogic()
  return (
    <main className='page page-verbs'>
      <Box className='reduction__container'>
        <TableSearch />
        <table className='reduction__table'>
          <tbody>
            {GlueWordsList.words.map((word, i) => (
              <tr key={word + i}>
                <td>{word}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </main>
  )
}
export default GlueWords
