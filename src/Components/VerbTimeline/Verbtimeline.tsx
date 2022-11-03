import { FunctionComponent } from 'preact'
import { ImgContainer } from './styles/ImgContainer'

type Props = {
  src: string
}

const VerbTimeline: FunctionComponent<Props> = ({ src }) => {
  return (
    <ImgContainer>
      <img src={src} alt='tense timeline' title='verb tense timeline' />
    </ImgContainer>
  )
}
export default VerbTimeline
