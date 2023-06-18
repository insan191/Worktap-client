import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { categoriesArr } from '../../../utils/categoriesArr.js'

const CreateOrderCategory = ({ register, error }) => {
	return (
		<label className='createOrder__label'>
			<h3 className='createOrder__label-title'>Категория</h3>
			<select
				{...register('category', {
					required: {
						message: 'Выберите категорию',
						value: true,
					},
				})}
				className={
					error ? 'createOrder__label-select error' : 'createOrder__label-select'
				}
			>
				{categoriesArr.map(({ value, text }) => (
					<option
						value={value}
						key={value}
						className='createOrder__label-option'
					>
						{text}
					</option>
				))}
			</select>
			<span className='createOrder__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='createOrder__error-text'>{error && error.message}</span>
			</span>
		</label>
	)
}

export default CreateOrderCategory
