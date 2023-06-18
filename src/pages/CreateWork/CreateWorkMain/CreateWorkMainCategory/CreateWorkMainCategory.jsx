import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { categoriesArr } from '../../../../utils/categoriesArr.js'

const CreateWorkMainCategory = ({ register, error }) => {
	return (
		<label className='createWork__label'>
			<h3 className='createWork__label-title'>Категория</h3>
			<select
				{...register('category', {
					required: {
						message: 'Выберите категорию',
						value: true,
					},
				})}
				className={
					error ? 'createWork__label-select error' : 'createWork__label-select'
				}
			>
				{categoriesArr.map(({ value, text }) => (
					<option
						value={value}
						key={value}
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

export default CreateWorkMainCategory
