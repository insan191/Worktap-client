import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import defaultProfile from '../../../../assets/assetsProfile/defaultProfile.jpg'
import { useGetProfileQuery } from '../../../../redux/reducers/api/profile'
const MessengerSidebarChatsItem = ({ member ,chatId}) => {
	const { data = {} } = useGetProfileQuery(member)
	const params = useParams()
	const { name, surname, photo } = data
	const nav = useNavigate()
	const handleGetChat = ()=>{
		nav(`/messenger/${chatId}`)
	} 
	return (
		<div className={`messenger__sidebar-chats-item ${params['*'] === chatId && 'active'}`} onClick={handleGetChat}>
			<img src={photo ? `${process.env.REACT_APP_URL}${photo}` : defaultProfile} alt="avatar" className="messenger__sidebar-chats-item-avatar" />
			<div className="messenger__sidebar-chats-item-info">
				<p className="messenger__sidebar-chats-item-name">{`${name} ${surname}`}
				</p>
				<p className="messenger__sidebar-chats-item-message">
					Ну че там, сделал?
				</p>
			</div>
		</div>
	)
}

export default MessengerSidebarChatsItem