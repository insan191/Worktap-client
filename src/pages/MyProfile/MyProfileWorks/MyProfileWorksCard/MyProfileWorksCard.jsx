import React from 'react'
import { useNavigate } from 'react-router-dom'

const MyProfileWorksCard = ({ title, price, photo, _id}) => {
	const nav = useNavigate()
	return (
		<div
			className='myProfile__works-card'
			onClick={() => nav(`/work/${_id}`)}
		>
			<img
				src={`${process.env.REACT_APP_URL}${photo}`}
				alt={title}
				className='myProfile__works-card-img'
			/>
			<div className='myProfile__works-card-info'>
				<p className='myProfile__works-card-name'>{title}</p>
				<p className='myProfile__works-card-price'>{price} KGS</p>
			</div>
		</div>
	)
}

export default MyProfileWorksCard
