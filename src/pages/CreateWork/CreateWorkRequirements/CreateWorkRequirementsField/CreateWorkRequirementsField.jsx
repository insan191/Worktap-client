import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const CreateWorkRequirementsField = ({ error, register }) => {
	return (
		<label className='createWork__label'>
			<textarea
				placeholder='Кратко опишите требования'
				type='text'
				{...register('requirements', {
					required: {
						value: true,
						message: 'Опишите требования',
					},
					maxLength: {
						message: 'Максимальная длина 1000 символов',
						value: 1000,
					},
				})}
				className={
					error
						? 'createWork__label-textarea error'
						: 'createWork__label-textarea'
				}
			/>
			<span className='createWork__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='createWork__error-text'>{error && error.message}</span>
			</span>
		</label>
	)
}

export default CreateWorkRequirementsField
