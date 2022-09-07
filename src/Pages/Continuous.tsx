import React from 'react'

function Continuous() {
	return (
		<section className='tense-time'>
			<div data-spollers className='tense-time__container'>
				<div
					data-da='.spollers__statement, 767'
					className='grid__tense additional-padding statement'>
					<div className='grid__mark present-mark'>Pr</div>
					<div className='grid__pronouns grid-3-3'>
						<div className='grid__pronouns-general'>I</div>
						<div className='grid__pronouns-3'>am</div>
						<div className='grid__verb stretching-3'>Ving</div>
						<div className='grid__pronouns-general'>
							You
							<br />
							We
							<br />
							They
						</div>
						<div className='grid__pronouns-3'>are</div>
						<div className='grid__pronouns-3'>
							He
							<br />
							She
							<br />
							It
						</div>
						<div className='grid__pronouns-3'>is</div>
					</div>
				</div>
				<div data-da='.spollers__denial, 767' className='grid__tense denial'>
					<div className='grid__mark present-mark hide-mark'>Pr</div>
					<div className='grid__pronouns grid-3-3'>
						<div className='grid__pronouns-general'>I</div>
						<div className='grid__pronouns-3'>am not</div>
						<div className='grid__verb stretching-3'>Ving</div>
						<div className='grid__pronouns-general'>
							You
							<br />
							We
							<br />
							They
						</div>
						<div className='grid__pronouns-3'>are not</div>
						<div className='grid__pronouns-3'>
							He
							<br />
							She
							<br />
							It
						</div>
						<div className='grid__pronouns-3'>is not</div>
					</div>
				</div>
				<div
					data-da='.spollers__question, 767'
					className='grid__tense question'>
					<div className='grid__mark present-mark hide-mark'>Pr</div>
					<div className='grid__pronouns grid-3-3'>
						<div className='grid__pronouns-3'>Am</div>
						<div className='grid__pronouns-general'>i</div>
						<div className='grid__verb stretching-3'>Ving?</div>
						<div className='grid__pronouns-3'>Are</div>
						<div className='grid__pronouns-general'>
							you
							<br />
							we
							<br />
							they
						</div>
						<div className='grid__pronouns-3'>Is</div>
						<div className='grid__pronouns-3'>
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
					<div className='grid__pronouns colom-3'>
						<div className='grid__pronouns-general'>
							I<br />
							You
							<br />
							We
							<br />
							They
						</div>
						<div className='grid__word-question'>was</div>
						<div className='grid__verb stretching'>Ving</div>
						<div className='grid__pronouns-general'>
							He
							<br />
							She
							<br />
							It
						</div>
						<div className='grid__word-question'>were</div>
					</div>
				</div>
				<div data-da='.spollers__denial, 767' className='grid__tense denial'>
					<div className='grid__mark past-mark hide-mark'>Pa</div>
					<div className='grid__pronouns colom-3'>
						<div className='grid__pronouns-general'>
							I<br />
							You
							<br />
							We
							<br />
							They
						</div>
						<div className='grid__word-question'>was not</div>
						<div className='grid__verb stretching'>Ving</div>
						<div className='grid__pronouns-general'>
							He
							<br />
							She
							<br />
							It
						</div>
						<div className='grid__word-question'>were not</div>
					</div>
				</div>
				<div
					data-da='.spollers__question, 767'
					className='grid__tense question'>
					<div className='grid__mark past-mark hide-mark'>Pa</div>
					<div className='grid__pronouns colom-3'>
						<div className='grid__word-question'>Was</div>
						<div className='grid__pronouns-general'>
							i<br />
							you
							<br />
							we
							<br />
							they
						</div>
						<div className='grid__verb stretching'>Ving?</div>
						<div className='grid__word-question'>Were</div>
						<div className='grid__pronouns-general'>
							he
							<br />
							she
							<br />
							it
						</div>
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
						<div className='grid__word-question'>will be</div>
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
						<div className='grid__word-question'>won't be</div>
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
						<div className='grid__word-question'>be</div>
						<div className='grid__verb'>Ving?</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Continuous
