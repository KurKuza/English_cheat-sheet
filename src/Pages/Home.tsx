import { FunctionComponent } from 'preact'
import { Link } from 'react-router-dom'

const Home: FunctionComponent = ({ children }) => {
	return (
		<div className='wrapper'>
			<main className='page page-home'>
				<section className='tenses'>
					<div className='tenses__container'>
						<Link to='/simple' className='tensec__link'>
							<div className='tenses__box'>
								<div className='tenses__text'>Simple</div>
							</div>
						</Link>
						<Link to='/continuous' className='tensec__link'>
							<div className='tenses__box'>
								<div className='tenses__text'>Continuous</div>
							</div>
						</Link>
						<Link to='/perfect' className='tensec__link'>
							<div className='tenses__box'>
								<div className='tenses__text'>Perfect</div>
							</div>
						</Link>
						<Link to='/perfectContinuous' className='tensec__link'>
							<div className='tenses__box'>
								<div className='tenses__text'>
									Perfect
									<br />
									continuous
								</div>
							</div>
						</Link>
					</div>
				</section>
				<section className='another'>
					<div className='another__container'>
						<Link to='/passiveVoice' className='tensec__link'>
							<div className='tenses__box another__box'>
								<div className='tenses__text'>Passive voice</div>
							</div>
						</Link>
						<Link to='/irregularVerbs' className='tensec__link'>
							<div className='tenses__box another__box'>
								<div className='tenses__text'>Irregular verbs</div>
							</div>
						</Link>
						<Link to='/reduction' className='tensec__link'>
							<div className='tenses__box another__box'>
								<div className='tenses__text'>Reduction</div>
							</div>
						</Link>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Home
