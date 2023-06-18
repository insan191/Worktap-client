import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const CreateOrderDescription = ({ register, error }) => {
	return (
		<label className='createOrder__label'>
			<h3 className='createOrder__label-title'>Описание</h3>
			<textarea
				placeholder='Кратко опишите свой заказ'
				type='text'
				{...register('description', {
					required: {
						value: true,
						message: 'Введите описание',
					},
					maxLength: {
						message: 'Максимальная длина 1000 символов',
						value: 1000,
					},
				})}
				className={
					error
						? 'createOrder__label-textarea error'
						: 'createOrder__label-textarea'
				}
			/>
			<span className='createOrder__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='createOrder__error-text'>
					{error && error.message}
				</span>
			</span>
		</label>
	)
}

export default CreateOrderDescription
