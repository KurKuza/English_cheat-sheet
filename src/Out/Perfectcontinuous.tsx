import { Box } from '@mui/system'
import { Fragment, FunctionComponent } from 'preact'
import Spoilers from '../Components/Spoiler/Spoilers'

const perfectContinuous: FunctionComponent = () => {
	return (
		<section className='tense-time'>
			<div className='tense-time__container'>
				<Spoilers
					statement={<Statement />}
					denial={<Denial />}
					quention={<Question />}
				/>
			</div>
		</section>
	)
}

const Statement: FunctionComponent = () => {
	return (
		<Fragment>

		</Fragment>
	)
}

const Denial: FunctionComponent = () => {
	return (
		<Fragment>

		</Fragment>
	)
}

const Question: FunctionComponent = () => {
	return (
		<Fragment>

		</Fragment>
	)
}

export default perfectContinuous
