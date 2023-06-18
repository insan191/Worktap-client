import React from 'react'
import { format } from 'timeago.js'
import defaultProfile from '../../../assets/assetsProfile/defaultProfile.jpg'
import StarRating from '../../../components/StarRating/StarRating'
import { useGetProfileQuery } from '../../../redux/reducers/api/profile'
import { useNavigate } from 'react-router-dom'

const ExchangeCard = ({ title, budget,creator, createdAt ,_id}) => {
	const nav = useNavigate() 
	const { data = {} } = useGetProfileQuery(creator)
	const { photo, name, surname } = data
	return (
		<div className='exchange__card' onClick={()=>nav(`/order/${_id}`)}>
			<div className='exchange__card-top'>
				<h3 className='exchange__card-title'>{title}</h3>
				<p className='exchange__card-price'>Бюджет: {budget} KGS</p>
			</div>
			<div className='exchange__card-main'>
				<div className='exchange__card-profile'>
					<img
						src={
							photo ? `${process.env.REACT_APP_URL}${photo}` : defaultProfile
						}
						alt='avatar'
						className='exchange__card-profile-avatar'
					/>
					<div className='exchange__card-profile-info'>
						<p className='exchange__card-profile-name'>{`${name} ${surname}`}</p>
						<p className='exchange__card-profile-projectsCount'>
							Размещено проектов на бирже: 25
						</p>
						<div className='exchange__card-profile-grade'>
							<div>
								<StarRating />
							</div>

							<p className='exchange__card-profile-reviews'>15 отзывов</p>
						</div>
					</div>
				</div>
				<div className='exchange__card-right'>
					<p className='exchange__card-deadline'>{format(createdAt)}</p>
					<p className='exchange__card-offerCount'>Предложений: 50</p>
				</div>
			</div>
		</div>
	)
}

export default ExchangeCard
