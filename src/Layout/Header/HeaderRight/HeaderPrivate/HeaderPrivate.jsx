import React from 'react'
import { AiFillMessage, AiFillStar } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { Link } from 'react-router-dom'
import HeaderProfile from './HeaderProfile/HeaderProfile'

const HeaderPrivate = () => {
	return (
		<div className='header__right-private'>
			<div className='header__right-private-icons'>
				<Link className='header__right-private-icon' to={'/favorites'}>
					<AiFillStar fill='#B0AAD0' />
				</Link>
				<Link className='header__right-private-icon'>
					<IoMdNotifications fill='#B0AAD0' />
				</Link>
				<Link className='header__right-private-icon' to='messenger'>
					<AiFillMessage fill='#B0AAD0' />
				</Link>
			</div>
			<HeaderProfile />
		</div>
	)
}

export default HeaderPrivate
