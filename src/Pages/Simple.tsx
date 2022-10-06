import { Fragment, FunctionComponent } from 'preact'
import Spoilers from '../Components/Spoiler/Spoilers'

function Simple() {
	return (
		<section className='tense-time'>
			<div data-spollers className='tense-time__container'>
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
			<div className='grid__tense additional-padding statement'>
				<div className='grid__mark present-mark'>Pr</div>
				<div className='grid__pronouns'>
					<div className='grid__pronouns-general'>
						I<br />
						You
						<br />
						We
						<br />
						They
					</div>
					<div className='grid__verb'>V</div>
					<div className='grid__pronouns-3'>
						He
						<br />
						She
						<br />
						It
					</div>
					<div className='grid__verb'>Vs</div>
				</div>
			</div>
			<div className='grid__tense denial'>
				<div className='grid__mark present-mark hide-mark'>Pr</div>
				<div className='grid__pronouns colom-3'>
					<div className='grid__pronouns-general'>
						I<br />
						You
						<br />
						We
						<br />
						They
					</div>
					<div className='grid__denial'>don't</div>
					<div className='grid__verb stretching'>V</div>
					<div className='grid__pronouns-3'>
						He
						<br />
						She
						<br />
						It
					</div>
					<div className='grid__denial'>doesn't</div>
				</div>
			</div>
			<div className='grid__tense question'>
				<div className='grid__mark present-mark hide-mark'>Pr</div>
				<div className='grid__pronouns colom-3'>
					<div className='grid__word-question'>Do</div>
					<div className='grid__pronouns-general'>
						i<br />
						you
						<br />
						we
						<br />
						they
					</div>
					<div className='grid__verb stretching'>V?</div>
					<div className='grid__word-question'>Does</div>
					<div className='grid__pronouns-3 '>
						he
						<br />
						she
						<br />
						it
					</div>
				</div>
			</div>
		</Fragment>
	)
}

const Denial: FunctionComponent = () => {
	return (
		<Fragment>
			<div className='grid__tense additional-padding statement'>
				<div className='grid__mark past-mark'>Pa</div>
				<div className='grid__pronouns colom-1'>
					<div className='grid__pronouns-general'>
						I<br />
						You
						<br />
						We
						<br />
						They
						<br />
						He
						<br />
						She
						<br />
						It
					</div>
					<div className='grid__verb'>
						Ved
						<br />
						<span>V2</span>
					</div>
				</div>
			</div>
			<div className='grid__tense denial'>
				<div className='grid__mark past-mark hide-mark'>Pa</div>
				<div className='grid__pronouns colom-1-3'>
					<div className='grid__pronouns-general'>
						I<br />
						You
						<br />
						We
						<br />
						They
						<br />
						He
						<br />
						She
						<br />
						It
					</div>
					<div className='grid__word-question'>didn’t</div>
					<div className='grid__verb'>V</div>
				</div>
			</div>
			<div className='grid__tense question'>
				<div className='grid__mark past-mark hide-mark'>Pa</div>
				<div className='grid__pronouns colom-1-3'>
					<div className='grid__word-question'>Did</div>
					<div className='grid__pronouns-general'>
						i<br />
						you
						<br />
						we
						<br />
						they
						<br />
						he
						<br />
						she
						<br />
						it
					</div>
					<div className='grid__verb'>V?</div>
				</div>
			</div>
		</Fragment>
	)
}

const Question: FunctionComponent = () => {
	return (
		<Fragment>
			<div className='grid__tense additional-padding statement'>
				<div className='grid__mark future-mark'>Fu</div>
				<div className='grid__pronouns colom-1-3'>
					<div className='grid__pronouns-general'>
						I<br />
						You
						<br />
						We
						<br />
						They
						<br />
						He
						<br />
						She
						<br />
						It
					</div>
					<div className='grid__word-question'>will</div>
					<div className='grid__verb'>Ved</div>
				</div>
			</div>
			<div className='grid__tense denial'>
				<div className='grid__mark future-mark hide-mark'>Fu</div>
				<div className='grid__pronouns colom-1-3'>
					<div className='grid__pronouns-general'>
						I<br />
						You
						<br />
						We
						<br />
						They
						<br />
						He
						<br />
						She
						<br />
						It
					</div>
					<div className='grid__word-question'>won't</div>
					<div className='grid__verb'>V</div>
				</div>
			</div>
			<div className='grid__tense question'>
				<div className='grid__mark future-mark hide-mark'>Fu</div>
				<div className='grid__pronouns colom-1-3'>
					<div className='grid__word-question'>Will</div>
					<div className='grid__pronouns-general'>
						i<br />
						you
						<br />
						we
						<br />
						they
						<br />
						he
						<br />
						she
						<br />
						it
					</div>
					<div className='grid__verb'>V?</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Simple
