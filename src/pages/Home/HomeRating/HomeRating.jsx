import React from 'react'
import { useGetAllUsersQuery } from '../../../redux/reducers/api/allUsers'
import './HomeRating.scss'
import HomeRatingCard from './HomeRatingCard/HomeRatingCard'
const HomeRating = () => {
	const { data = [], isLoading } = useGetAllUsersQuery()
	if (isLoading) {
		return 'loading...'
	}
	return (
		<div className='home__rating'>
			<div className='container'>
				<div className='home__rating-content'>
					<h2 className='home__rating-title'>Топ фрилансеров</h2>
					<div className='home__rating-row'>
						{data.map(({ name, photo, surname, profession, _id }) => (
							<HomeRatingCard
								key={_id}
								id={_id}
								photo={photo}
								name={name}
								surname={surname}
								profession={profession}
							/>
						))}

						{/* <div className='home__rating-card-more'>
							<p className='home__rating-card-more-text'>
								Посмотреть всех ТОП фрилансеров
							</p>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeRating
