import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const LoginEmail = ({ register, error }) => {
	return (
		<label className='login__label'>
			<h2 className='login__label-title'>E-mail</h2>
			<input
				type='text'
				className={error ? 'login__field error' : 'login__field'}
				{...register('email', {
					required: {
						message: 'Введите E-mail',
						value: true,
					},
					pattern: {
						value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						message: 'Введите E-mail правильно',
					},
					maxLength: {
						message: 'Максимальная длина 40 символов',
						value: 40,
					},
					minLength: {
						message: 'Минимальная длина 3 символа',
						value: 3,
					},
				})}
				placeholder='E-mail'
			/>
			<span className='login__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='login__error-text'>{error && error.message}</span>
			</span>
		</label>
	)
}

export default LoginEmail
