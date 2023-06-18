import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const CreateOrderDeadline = ({ register, error }) => {
	return (
		<label className='createOrder__label'>
			<h3 className='createOrder__label-title'>Срок выполнения работы в днях</h3>
			<input
				placeholder='Введите срок'
				type='number'
				{...register('deadline', {
					required: {
						message: 'Введите срок',
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
				<span className='createOrder__error-text'>{error && error.message}</span>
			</span>
		</label>
	)
}

export default CreateOrderDeadline
