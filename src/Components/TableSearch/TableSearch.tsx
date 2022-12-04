import { Box } from '@mui/material'
import { FunctionComponent } from 'preact'

import { tableSearch } from '../../utils/tableSearch'

const TableSearch: FunctionComponent = () => {
  return (
    <Box className='input__search'>
      <input
        onInput={(e) => tableSearch(e.currentTarget)}
        autoComplete='off'
        type='search'
        placeholder='Search'
        className='input'
      />
    </Box>
  )
}

export default TableSearch
