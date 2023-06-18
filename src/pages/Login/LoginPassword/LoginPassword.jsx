import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const LoginPassword = ({ register, error }) => {
	return (
		<label className='login__label'>
			<h2 className='login__label-title'>Пароль</h2>
			<input
				type='password'
				className={error ? 'login__field error' : 'login__field'}
				{...register('password', {
					required: {
						message: 'Введите пароль',
						value: true,
					},
					maxLength: {
						message: 'Максимальная длина 20 символов',
						value: 20,
					},
					minLength: {
						message: 'Минимальная длина 8 символов',
						value: 8,
					},
					pattern: {
						message: 'Введите пароль правильно',
						value: /(?=.*[0-9])(?=.*[a-z]){6,}/g,
					},
				})}
				placeholder='Пароль'
			/>
			<span className='login__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='login__error-text'>
					{error && error.message}
				</span>
			</span>
		</label>
	)
}

export default LoginPassword
