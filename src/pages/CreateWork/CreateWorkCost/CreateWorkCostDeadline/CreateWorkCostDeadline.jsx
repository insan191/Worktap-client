import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const CreateWorkCostDeadline = ({ register, error }) => {
	return (
		<label className='createWork__label'>
			<h3 className='createWork__label-title'>Срок выполнения</h3>
			<input
				placeholder='Срок выполнения'
				type='text'
				{...register('deadline', {
					maxLength: {
						message: 'Максимальная длина 30 символов',
						value: 30,
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

export default CreateWorkCostDeadline
