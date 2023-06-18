import React, { useEffect, useState } from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { categoriesArr } from '../../../utils/categoriesArr.js'
const CreateOrderSubcategory = ({ register, error, watch }) => {
	const [currentCategory, setCurrentCategory] = useState(
		'texts-and-translations'
	)
	useEffect(() => {
		watch(({ category }) => setCurrentCategory(category))
	})
	return (
		<label className='createOrder__label'>
			<h3 className='createOrder__label-title'>Подкатегория</h3>
			<select
				placeholder='Подкатегория'
				{...register('subcategory', {
					required: {
						message: 'Выберите подкатегорию',
						value: true,
					},
				})}
				className={
					error
						? 'createOrder__label-select error'
						: 'createOrder__label-select'
				}
			>
				{categoriesArr
					.find(({ value }) => value === currentCategory)
					.subcategories.map(({ value, text }) => (
						<option
							key={value}
							value={value}
							className='createOrder__label-option'
						>
							{text}
						</option>
					))}
			</select>
			<span className='createOrder__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='createOrder__error-text'>
					{error && error.message}
				</span>
			</span>
		</label>
	)
}

export default CreateOrderSubcategory
