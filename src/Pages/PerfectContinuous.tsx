function PerfectContinuous() {
	return (
		<section className='tense-time'>
			<div data-spollers className='tense-time__container'>
				<div
					data-da='.spollers__statement, 767'
					className='grid__tense additional-padding statement'>
					<div className='grid__mark present-mark'>Pr</div>
					<div className='grid__pronouns colom-3'>
						<div className='grid__pronouns-general'>
							I<br />
							You
							<br />
							We
							<br />
							They
						</div>
						<div className='grid__word-question'>have been</div>
						<div className='grid__verb stretching'>Ving</div>
						<div className='grid__pronouns-general'>
							He
							<br />
							She
							<br />
							It
						</div>
						<div className='grid__word-question'>has been</div>
					</div>
				</div>
				<div data-da='.spollers__denial, 767' className='grid__tense denial'>
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
						<div className='grid__word-question'>have not been</div>
						<div className='grid__verb stretching'>Ving</div>
						<div className='grid__pronouns-general'>
							He
							<br />
							She
							<br />
							It
						</div>
						<div className='grid__word-question'>has not been</div>
					</div>
				</div>
				<div
					data-da='.spollers__question, 767'
					className='grid__tense question'>
					<div className='grid__mark present-mark hide-mark'>Pr</div>
					<div className='grid__pronouns grid-2-4'>
						<div className='grid__word-question'>Have</div>
						<div className='grid__pronouns-general'>
							i<br />
							you
							<br />
							we
							<br />
							they
						</div>
						<div className='grid__word-question stretching'>been</div>
						<div className='grid__verb stretching'>Ving?</div>
						<div className='grid__word-question'>Has</div>
						<div className='grid__pronouns-general'>
							he
							<br />
							she
							<br />
							it
						</div>
					</div>
				</div>
				{/*Pa ---------------------------------------------------------------------- */}
				<div
					data-da='.spollers__statement, 767'
					className='grid__tense additional-padding statement'>
					<div className='grid__mark past-mark'>Pa</div>
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
						<div className='grid__word-question'>had been</div>
						<div className='grid__verb'>Ving</div>
					</div>
				</div>
				<div data-da='.spollers__denial, 767' className='grid__tense denial'>
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
						<div className='grid__word-question'>had not been</div>
						<div className='grid__verb'>Ving</div>
					</div>
				</div>
				<div
					data-da='.spollers__question, 767'
					className='grid__tense question'>
					<div className='grid__mark past-mark hide-mark'>Pa</div>
					<div className='grid__pronouns grid-1-4'>
						<div className='grid__word-question'>Had</div>
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
						<div className='grid__word-question'>been</div>
						<div className='grid__verb'>Ving?</div>
					</div>
				</div>
				{/*Fu ---------------------------------------------------------------------- */}
				<div
					data-da='.spollers__statement, 767'
					className='grid__tense additional-padding statement'>
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
						<div className='grid__word-question'>will have been</div>
						<div className='grid__verb'>Ving</div>
					</div>
				</div>
				<div data-da='.spollers__denial, 767' className='grid__tense denial'>
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
						<div className='grid__word-question'>won't have been</div>
						<div className='grid__verb'>Ving</div>
					</div>
				</div>
				<div
					data-da='.spollers__question, 767'
					className='grid__tense question'>
					<div className='grid__mark future-mark hide-mark'>Fu</div>
					<div className='grid__pronouns grid-1-4'>
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
						<div className='grid__word-question'>have been</div>
						<div className='grid__verb'>Ving?</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PerfectContinuous
