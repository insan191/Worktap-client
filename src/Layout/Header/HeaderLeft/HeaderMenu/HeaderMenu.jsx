import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { userSelector } from '../../../../redux/reselect'
const HeaderMenu = () => {
	const {
		user: { role },
	} = useSelector(userSelector)
	return (
		<div className='header__left-menu'>
			<NavLink className='header__left-menu-link' to='/exchange'>
				Биржа
			</NavLink>
			<NavLink className='header__left-menu-link' to='/works'>Ворки</NavLink>
			<NavLink
				className={
					role === 'performer'
						? 'header__left-menu-link none'
						: 'header__left-menu-link'
				}
				to={'createorder'}
			>
				Создать заказ
			</NavLink>
			<NavLink
				className={
					role === 'customer'
						? 'header__left-menu-link none'
						: 'header__left-menu-link'
				}
				to={'creatework'}
			>
				Создать ворк
			</NavLink>
		</div>
	)
}

export default HeaderMenu
