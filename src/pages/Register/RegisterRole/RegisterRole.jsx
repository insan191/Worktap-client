import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const RegisterRole = ({ register, error }) => {
	return (
		<label className='register__label'>
			<div className='register__role'>
				<div className='register__role-item'>
					<input
						{...register('role', {
							required: { value: true, message: 'Укажите роль' },
						})}
						id='performer'
						value='performer'
						className='register__role-input'
						type='radio'
					/>
					<label htmlFor='performer' className='register__role-text'>
						Я исполнитель
					</label>
				</div>
				<div className='register__role-item'>
					<input
						{...register('role', {
							required: { value: true, message: 'Укажите роль' },
						})}
						id='customer'
						className='register__role-input'
						type='radio'
						value='customer'
					/>
					<label htmlFor='customer' className='register__role-text'>
						Я заказчик
					</label>
				</div>
			</div>
			<span className='register__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='register__error-text'>{error && error.message}</span>
			</span>
		</label>
	)
}

export default RegisterRole
