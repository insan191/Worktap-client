import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const CreateOrderBudget = ({ register, error }) => {
	return (
		<label className='createOrder__label'>
			<h3 className='createOrder__label-title'>Бюджет в тенге</h3>
			<input
				placeholder='Введите бюджет'
				type='number'
				{...register('budget', {
					required: {
						message: 'Введите бюджет',
						value: true,
					},
					validate: v => {
						if (v < 0) {
							return 'Нельзя указывать отрицательное число'
						}
					},
				})}
				className={
					error ? 'createOrder__label-field error' : 'createOrder__label-field'
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

export default CreateOrderBudget
