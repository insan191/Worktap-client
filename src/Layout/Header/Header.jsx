import React from 'react'
import { useLocation } from 'react-router-dom'
import './Header.scss'
import HeaderLeft from './HeaderLeft/HeaderLeft'
import HeaderRight from './HeaderRight/HeaderRight'

const Header = () => {
	const { pathname } = useLocation()

	return (
		<header
			className={
				pathname === '/' ||
				pathname.includes('/myProfile') ||
				pathname.includes('/exchange')
					? 'header milk'
					: 'header'
			}
		>
			<div className='container'>
				<nav className='header__nav'>
					<HeaderLeft />
					<HeaderRight />
				</nav>
			</div>
		</header>
	)
}

export default Header
