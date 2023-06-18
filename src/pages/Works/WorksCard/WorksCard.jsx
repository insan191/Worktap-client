import React from 'react'
import { useNavigate } from 'react-router-dom'
import defaultProfile from '../../../assets/assetsProfile/defaultProfile.jpg'
import StarRating from '../../../components/StarRating/StarRating'
import { useGetProfileQuery } from '../../../redux/reducers/api/profile'
const WorksCard = ({ title, image, price, creator, id }) => {
	const nav = useNavigate()
	const { data = {} } = useGetProfileQuery(creator)
	const { name, surname, photo } = data
	return (
		<div className='works__card' onClick={() => nav(`/work/${id}`)}>
			<img
				src={image ? `${process.env.REACT_APP_URL}${image}` : defaultProfile}
				alt=''
				className='works__card-img'
			/>
			<div className='works__card-info'>
				<h3 className='works__card-title'>{title}</h3>
				<p className='works__card-price'>{price} тенге</p>
				<div className='works__card-creator'>
					<img
						src={
							photo ? `${process.env.REACT_APP_URL}${photo}` : defaultProfile
						}
						alt=''
						className='works__card-creator-img'
					/>
					<div className='works__card-creator-info'>
						<p className='works__card-creator-name'>{`${name} ${surname}`}</p>
						<p className='works__card-creator-worksCount'>
							Выполнено проектов: 45
						</p>
					</div>
				</div>
				<StarRating />
			</div>
		</div>
	)
}

export default WorksCard
