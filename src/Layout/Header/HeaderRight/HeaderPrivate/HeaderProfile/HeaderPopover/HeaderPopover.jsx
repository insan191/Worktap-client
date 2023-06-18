import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
	fillUser,
	logOutUser,
} from '../../../../../../redux/reducers/slice/user'
import { userSelector } from '../../../../../../redux/reselect'
import axios from '../../../../../../utils/axios.js'

const HeaderPopover = ({ popoverRef }) => {
	const nav = useNavigate()
	const toast = useToast()
	const {
		user: { role, _id },
	} = useSelector(userSelector)
	const dispatch = useDispatch()
	const handleChangeRole = async data => {
		try {
			const res = await axios.patch(`/users/${_id}/changerole`, {
				role: data,
			})
			dispatch(fillUser(res.data))
		} catch ({
			response: {
				data: { message },
			},
		}) {
			toast({
				title: message,
				status: 'error',
				duration: 3000,
				isClosable: true,
				position: 'bottom-left',
			})
		}
	}
	const handleLogOut = () => {
		dispatch(logOutUser())
		nav('/')
	}
	return (
		<div ref={popoverRef} className='header__right-private-profile-popover'>
			<div className='header__right-private-profile-role'>
				<button
					className={
						role === 'customer'
							? 'header__right-private-profile-role-btn active'
							: 'header__right-private-profile-role-btn'
					}
					onClick={() => handleChangeRole('customer')}
				>
					Я заказчик
				</button>
				<button
					className={
						role === 'performer'
							? 'header__right-private-profile-role-btn active'
							: 'header__right-private-profile-role-btn'
					}
					onClick={() => handleChangeRole('performer')}
				>
					Я исполнитель
				</button>
			</div>
			<div className='header__right-private-profile-list'>
				<Link
					to={`myProfile/${_id}`}
					className='header__right-private-profile-item'
				>
					Мой кабинет
				</Link>
				<Link className='header__right-private-profile-item'>Мои заказы</Link>
				<Link className='header__right-private-profile-item'>История</Link>
				<Link className='header__right-private-profile-item'>Мой кошелек</Link>
				<Link className='header__right-private-profile-item'>
					Мои настройки
				</Link>
				<Link
					className='header__right-private-profile-item red'
					onClick={handleLogOut}
				>
					Выйти из аккаунта
				</Link>
			</div>
		</div>
	)
}

export default HeaderPopover
