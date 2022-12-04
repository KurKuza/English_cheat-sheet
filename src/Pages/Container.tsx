import { FunctionComponent } from 'preact'
import { Outlet } from 'react-router-dom'

import { usePageLogic } from '../Hooks/pageLogic'

const Container: FunctionComponent = () => {
  usePageLogic()

  return <Outlet />
}

export default Container
