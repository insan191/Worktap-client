import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const CreateWorkMainTitle = ({ register, error }) => {
	return (
		<label className='createWork__label'>
			<h3 className='createWork__label-title'>Название</h3>
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
					error ? 'createWork__label-field error' : 'createWork__label-field'
				}
			/>
			<span className='createWork__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='createWork__error-text'>{error && error.message}</span>
			</span>
		</label>
	)
}

export default CreateWorkMainTitle
