import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderAuth = () => {
	const nav = useNavigate()
	return (
		<div className='header__right-auth'>
			<button className='header__right-auth-btn grayButton'onClick={()=>nav('register')}>Регистрация</button>
			<button className='header__right-auth-btn greenButton'onClick={()=>nav('login')}>Войти</button>
		</div>
	)
}

export default HeaderAuth
