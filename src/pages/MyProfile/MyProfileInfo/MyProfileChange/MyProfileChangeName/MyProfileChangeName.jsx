import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
const MyProfileChangeName = ({ register, error }) => {
	return (
		<label className='myProfile__change-label'>
			<h2 className='myProfile__change-label-title'>Ваше имя</h2>
			<input
				placeholder='Имя'
				type='text'
				{...register('name', {
					required: {
						message: 'Введите имя',
						value: true,
					},
					maxLength: {
						message: 'Максимальная длина 20 символов',
						value: 20,
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

export default MyProfileChangeName
