import { FunctionComponent } from 'preact'
import GlueWordsList from '../Db/GlueWordsList.json'
import { Box } from '@mui/material'

console.log('GlueWordsList', GlueWordsList.words)

const GlueWords: FunctionComponent = () => {
  return (
    <main className='page page-verbs'>
      <Box className='reduction__container'>
        <table className='reduction__table'>
          <tbody>
            {GlueWordsList.words.map((word) => (
              <tr>
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
