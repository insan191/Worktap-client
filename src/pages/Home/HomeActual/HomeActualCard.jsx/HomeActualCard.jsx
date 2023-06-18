import React from 'react'
import { textLengthLimit } from '../../../../utils/textLengthLimit'
import { useGetProfileQuery } from '../../../../redux/reducers/api/profile'
import defaultProfile from '../../../../assets/assetsProfile/defaultProfile.jpg'
import { useNavigate } from 'react-router-dom'
const HomeActualCard = ({desc,title,creator,id}) => {
	const { data = {} } = useGetProfileQuery(creator)
	const { photo } = data
	const nav = useNavigate()
	return (
		<div className='home__actual-card'>
			<div className='home__actual-card-top'>
				<img
					src={
						photo
							? `${process.env.REACT_APP_URL}${photo}`
							: defaultProfile
					}
					alt='Avatar'
					className='home__actual-card-top-avatar'
				/>
				<p className='home__actual-card-top-theme'>
					{textLengthLimit(title, 60)}
				</p>
			</div>
			<p className='home__actual-card-desc'>{textLengthLimit(desc, 270)}</p>
			<button className='home__actual-card-btn' onClick={()=>nav(`/work/${id}`)}>Посмотреть</button>
		</div>
	)
}

export default HomeActualCard
