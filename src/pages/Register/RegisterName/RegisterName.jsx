import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
const RegisterName = ({ register, error }) => {
	return (
		<label className='register__label'>
			<h2 className='register__label-title'>Ваше имя</h2>
			<input
				placeholder='Имя'
				type='text'
				{...register('name', {
					required: {
						message: 'Введите имя',
						value: true,
					},
					maxLength: {
						message: 'Максимальная длина 20 символов',
						value: 20,
					},
					minLength: {
						message: 'Минимальная длина 3 символов',
						value: 3,
					},
				})}
				className={error ? 'register__field error' : 'register__field'}
			/>
			<span className='register__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='register__error-text'>{error && error.message}</span>
			</span>
		</label>
	)
}

export default RegisterName
