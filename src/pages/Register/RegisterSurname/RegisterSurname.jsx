import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
const RegisterSurname = ({ register, error}) => {
	return (
		<label className='register__label'>
			<h2 className='register__label-title'>Ваша фамилия</h2>
			<input
				type='text'
				className={error ? 'register__field error' : 'register__field'}
				{...register('surname', {
					required: {
						message: 'Введите фамилию',
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
				placeholder='Фамилия'
			/>
			<span className='register__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='register__error-text'>
					{error && error.message}
				</span>
			</span>
		</label>
	)
}

export default RegisterSurname
