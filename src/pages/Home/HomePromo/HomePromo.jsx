import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import promo1 from '../../../assets/assetsHome/assetsHomePromo/promo1.svg'
import promo2 from '../../../assets/assetsHome/assetsHomePromo/promo2.svg'
import promo3 from '../../../assets/assetsHome/assetsHomePromo/promo3.svg'
import { userSelector } from '../../../redux/reselect'
import './HomePromo.scss'
const HomePromo = () => {
	const {
		user: { email },
	} = useSelector(userSelector)
	const nav = useNavigate()
	return (
		<div className='home__promo'>
			<div className='container'>
				<div className='home__promo-content'>
					<h2 className='home__promo-title'>Как WorkTap помогает бизнесу?</h2>
					<div className='home__promo-block'>
						<div className='home__promo-block-item'>
							<img src={promo1} alt='card' className='home__promo-block-icon' />
							<p className='home__promo-block-desc'>
								Оплачивайте с р/с или карты компании
							</p>
						</div>
						<div className='home__promo-block-item'>
							<img
								src={promo2}
								alt='money'
								className='home__promo-block-icon'
							/>
							<p className='home__promo-block-desc'>
								Экономьте до 87% бюджета на фрилансе
							</p>
						</div>
						<div className='home__promo-block-item'>
							<img
								src={promo3}
								alt='clock'
								className='home__promo-block-icon'
							/>
							<p className='home__promo-block-desc'>
								Экономьте до 75% времени на решении фриланс задач
							</p>
						</div>
					</div>

					<p className='home__promo-desc'>
						WorkTap — быстро, просто и безопасно!
					</p>
					{!email.length && (
						<button
							className='home__promo-btn'
							onClick={() => nav('/register')}
						>
							Начать!
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default HomePromo
