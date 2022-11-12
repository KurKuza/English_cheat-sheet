import { Box } from '@mui/material'
import { FunctionComponent } from 'preact'
import { useRef } from 'preact/hooks'

import IrregularList from '../Db/IrregularList.json'

const IrregularVerbs: FunctionComponent = () => {
  const searchRef = useRef<HTMLInputElement>(null)

  function search() {
    const val = searchRef.current.value.toUpperCase().trim(),
      tr = document.querySelectorAll('tbody tr')

    if (val != '') {
      tr.forEach(function (elem) {
        if (elem.innerHTML.toUpperCase().search(val) == -1) {
          elem.classList.add('hide')
        } else {
          elem.classList.remove('hide')
        }
      })
    } else {
      tr.forEach(function (elem) {
        elem.classList.remove('hide')
      })
    }
  }
  return (
    <main className='page page-verbs'>
      <section className='verbs'>
        <Box className='verbs'>
          <Box className='input__search'>
            <input
              id='search'
              ref={searchRef}
              onInput={() => search()}
              autoComplete='off'
              type='text'
              name='form[]'
              data-error='Ошибка'
              placeholder='Search'
              className='input'
            />
          </Box>
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
