import React from 'react'
import guide1 from '../../../assets/assetsHome/assetsHomeGuide/guide1.svg'
import guide2 from '../../../assets/assetsHome/assetsHomeGuide/guide2.svg'
import guide3 from '../../../assets/assetsHome/assetsHomeGuide/guide3.svg'
import './HomeGuide.scss'

const HomeGuide = () => {
	return (
		<div className='home__guide'>
			<div className='container'>
				<div className='home__guide-content'>
					<h2 className='home__guide-title'>Как решать задачи на WorkTap?</h2>
					<h3 className='home__guide-subtitle'>
						Идеально подходит для бизнеса и частных лиц
					</h3>
					<div className='home__guide-row'>
						<div className='home__guide-card'>
							<img
								src={guide1}
								alt='Выберите услугу'
								className='home__guide-card-icon'
							/>
							<p className='home__guide-card-title'>Выберите услугу</p>
							<p className='home__guide-card-desc'>
								В супермаркете WorkTap представлен широкий выбор услуг от
								квалифицированных специалистов.
							</p>
						</div>
						<div className='home__guide-card'>
							<img
								src={guide2}
								alt='Оплатите'
								className='home__guide-card-icon'
							/>
							<p className='home__guide-card-title'>Оплатите</p>
							<p className='home__guide-card-desc'>
								Деньги будут перечислены продавцу после того, как он выполнит
								работу, и вы её одобрите.
							</p>
						</div>
						<div className='home__guide-card'>
							<img src={guide3} alt='' className='home__guide-card-icon' />
							<p className='home__guide-card-title'>Получите результат</p>
							<p className='home__guide-card-desc'>
								Наш супермаркет гарантирует вам возврат средств в полном объёме
								в случае невыполнения заказа.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeGuide
