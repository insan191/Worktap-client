import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const CreateOrderTitle = ({ register, error }) => {
	return (
		<label className='createOrder__label'>
			<h3 className='createOrder__label-title'>Название</h3>
			<input
				placeholder='Название'
				type='text'
				{...register('title', {
					required: {
						message: 'Введите название',
						value: true,
					},
					maxLength: {
						message: 'Максимальная длина 100 символов',
						value: 100,
					},
				})}
				className={
					error ? 'createOrder__label-field error' : 'createOrder__label-field'
				}
			/>
			<span className='createOrder__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='createOrder__error-text'>{error && error.message}</span>
			</span>
		</label>
	)
}

export default CreateOrderTitle
