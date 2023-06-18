import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetChatsQuery } from '../../../redux/reducers/api/chats'
import MessengerSidebarChatsItem from './MessengerSidebarChatsItem/MessengerSidebarChatsItem'
import {userSelector} from '../../../redux/reselect.js'

const MessengerSidebar = () => {
	const [search, setSearch] = useState('')
	const {user} = useSelector(userSelector)
	const { data = []} = useGetChatsQuery(user._id)
	return (
		<div className='messenger__sidebar'>
			<input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Поиск' className='messenger__sidebar-search' />
			<div className="messenger__sidebar-chats">
				{
					data.map(({members,_id}) => (
						<MessengerSidebarChatsItem key={_id} member={members.filter(el => el !== user._id)} chatId={_id} />
					))
				}
			</div>
		</div>
	)
}

export default MessengerSidebar
