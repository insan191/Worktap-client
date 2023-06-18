import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const MyProfileChangeCountry = ({ error, register }) => {
	return (
		<label className='myProfile__change-label'>
			<h2 className='myProfile__change-label-title'>Страна</h2>
			<input
				type='text'
				className={
					error ? 'myProfile__change-field error' : 'myProfile__change-field'
				}
				{...register('country', {
					maxLength: {
						message: 'Максимальная длина 20 символов',
						value: 20,
					},
					minLength: {
						message: 'Минимальная длина 3 символов',
						value: 3,
					},
				})}
				placeholder='В какой стране вы живёте?'
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

export default MyProfileChangeCountry
