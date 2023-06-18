import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import ReactInputMask from 'react-input-mask'

const RegisterPhone = ({ register, error }) => {
	return (
		<label className='register__label'>
			<h2 className='register__label-title'>Телефон номер</h2>
			<ReactInputMask
				className={error ? 'register__field error' : 'register__field'}
				mask={`+\\9\\96(999)99-99-99`}
				type='tel'
				{...register('phone', {
					required: {
						value: true,
						message: 'Введите номер телефона',
					},
					pattern: {
						value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
						message: 'Введите номер телефона',
					},
				})}
				placeholder='Телефон'
			/>
			<span className='register__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='register__error-text'>{error && error.message}</span>
			</span>
		</label>
	)
}

export default RegisterPhone
