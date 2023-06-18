import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const MyProfileChangeDescription = ({ register, error }) => {
	return (
		<label className='myProfile__change-label'>
			<h2 className='myProfile__change-label-title'>Краткая информация</h2>
			<textarea
				placeholder='Расскажите о себе'
				type='text'
				{...register('description', {
					maxLength: {
						message: 'Максимальная длина 1000 символов',
						value: 1000,
					},
					minLength: {
						message: 'Минимальная длина 3 символов',
						value: 3,
					},
				})}
				className={
					error ? 'myProfile__change-field error' : 'myProfile__change-field'
				}
			/>
			<span className='myProfile__change-error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='myProfile__change-error-text'>
					{error && error.message}
				</span>
			</span>
		</label>
	)
}

export default MyProfileChangeDescription
