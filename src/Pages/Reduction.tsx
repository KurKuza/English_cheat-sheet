import { FunctionComponent } from 'preact'
import ReductionList from '../Db/ReductionList.json'
import { Box } from '@mui/material'

const Reduction: FunctionComponent = () => {
  return (
    <main className='page page-verbs'>
      <Box className='reduction__container'>
        <table className='reduction__table'>
          <tbody>
            {ReductionList.map((words) => (
              <tr>
                <td>{words.full}</td>
                <td>{words.reduced}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </main>
  )
}
export default Reduction
