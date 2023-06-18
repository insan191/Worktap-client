import React from 'react'
import MessengerChat from './MessengerChat/MessengerChat'
import MessengerSidebar from './MessengerSidebar/MessengerSidebar'
import './Messenger.scss'
const Messenger = () => {
	return (
		<div className='messenger'>
			<div className="container">
				<div className="messenger__content">
					<MessengerSidebar />
					<MessengerChat />
				</div>
			</div>
		</div>
	)
}

export default Messenger