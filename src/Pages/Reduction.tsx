import { Box } from '@mui/material'
import { FunctionComponent } from 'preact'

import TableSearch from '../Components/TableSearch/TableSearch'
import ReductionList from '../Db/ReductionList.json'
import { usePageLogic } from '../Hooks/pageLogic'

const Reduction: FunctionComponent = () => {
  usePageLogic()
  return (
    <main className='page page-verbs'>
      <Box className='reduction__container'>
        <TableSearch />
        <table className='reduction__table'>
          <tbody>
            {ReductionList.map((words) => (
              <tr key={words.full}>
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
