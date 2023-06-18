import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const CreateWorkDescriptionQuestion = ({ error, register }) => {
	return (
		<label className='createWork__label'>
			<h3 className='createWork__label-title'>Вопрос</h3>
			<input
				placeholder='Вопрос'
				type='text'
				{...register('question', {
					required: {
						message: 'Введите вопрос',
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

export default CreateWorkDescriptionQuestion
