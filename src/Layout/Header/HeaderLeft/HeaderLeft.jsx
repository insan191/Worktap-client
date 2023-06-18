import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import HeaderMenu from './HeaderMenu/HeaderMenu'
const HeaderLeft = () => {
	return (
		<div className='header__left'>
			<Link to=''>
				<h1 className='header__left-logo'>
					<img src={logo} alt='Worktap' />
				</h1>
			</Link>
			<HeaderMenu />
		</div>
	)
}

export default HeaderLeft
