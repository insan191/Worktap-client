import React from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from '../../../redux/reselect.js'
import HeaderAuth from './HeaderAuth/HeaderAuth'
import HeaderPrivate from './HeaderPrivate/HeaderPrivate'

const HeaderRight = () => {
	const {
		user: { email },
	} = useSelector(userSelector)
	return (
		<div className='header__right'>
			{email.length ? <HeaderPrivate /> : <HeaderAuth />}
		</div>
	)
}

export default HeaderRight
