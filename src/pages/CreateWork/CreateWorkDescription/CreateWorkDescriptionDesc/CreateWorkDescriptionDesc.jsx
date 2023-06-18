import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const CreateWorkDescriptionDesc = ({register,error}) => {
	return (
		<label className='createWork__label'>
			<textarea
				placeholder='Описание'
				type='text'
				{...register('desc', {
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

export default CreateWorkDescriptionDesc