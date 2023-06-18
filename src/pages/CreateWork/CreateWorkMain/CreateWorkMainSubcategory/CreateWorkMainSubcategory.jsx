import React, { useEffect, useState } from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { categoriesArr } from '../../../../utils/categoriesArr.js'
const CreateWorkMainSubcategory = ({ register, error, watch, main }) => {
	const [currentCategory, setCurrentCategory] = useState(
		main ? main.category : 'texts-and-translations'
	)
	useEffect(() => {
		watch(({ category }) => setCurrentCategory(category))
	})
	return (
		<label className='createWork__label'>
			<h3 className='createWork__label-title'>Подкатегория</h3>
			<select
				placeholder='Подкатегория'
				{...register('subcategory', {
					required: {
						message: 'Выберите подкатегорию',
						value: true,
					},
				})}
				className={
					error ? 'createWork__label-select error' : 'createWork__label-select'
				}
			>
				{categoriesArr
					.find(({ value }) => value === currentCategory)
					.subcategories.map(({ value, text }) => (
						<option
							key={value}
							value={value}
							className='createWork__label-option'
						>
							{text}
						</option>
					))}
			</select>
			<span className='createWork__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='createWork__error-text'>{error && error.message}</span>
			</span>
		</label>
	)
}

export default CreateWorkMainSubcategory
