import React, { useState } from 'react'
import StarRating from '../../../../components/StarRating/StarRating'
import { textLengthLimit } from '../../../../utils/textLengthLimit'
import defaultProfile from '../../../../assets/assetsProfile/defaultProfile.jpg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userSelector } from '../../../../redux/reselect.js'
import { useCreateChatMutation, useGetChatsQuery } from '../../../../redux/reducers/api/chats'
const HomeRatingCard = ({ name, photo, surname, profession, id }) => {
	const nav = useNavigate()
	const { user: { _id } } = useSelector(userSelector)
	const { data = [] } = useGetChatsQuery(_id)
	const [createChat] = useCreateChatMutation()
	
	const handleCreateChat = () => {
		const handleCreateNewChat = async ()=>{
			await createChat({ senderId: _id, receiverId: id }).unwrap()
		}

		handleCreateNewChat()
		nav(`/messenger`)
	}
	return (
		<div className='home__rating-card'>
			<div className='home__rating-card-top'>
				<img
					src={photo ? `${process.env.REACT_APP_URL}${photo}` : defaultProfile}
					alt='Avatar'
					className='home__rating-card-top-avatar'
				/>
				<div className='home__rating-card-top-info'>
					<p className='home__rating-card-top-name'>
						{textLengthLimit(`${name} ${surname}`, 20)}
					</p>
					<p className='home__rating-card-top-profession'>
						{textLengthLimit(profession ? profession : '', 14)}
					</p>
					<p className='home__rating-card-top-projectCount'>
						Выполнено проектов: {textLengthLimit(376, 23)}
					</p>
					<div className='home__rating-card-top-grade'>
						<StarRating />
					</div>
				</div>
			</div>
			{
				_id !== id && <button className='home__rating-card-btn' onClick={handleCreateChat}>Написать</button>
			}


		</div>
	)
}

export default HomeRatingCard
