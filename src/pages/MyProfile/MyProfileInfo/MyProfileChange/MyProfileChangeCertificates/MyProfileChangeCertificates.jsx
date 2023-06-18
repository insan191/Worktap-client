import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const MyProfileChangeCertificates = ({ register, error }) => {
	return (
		<label className='myProfile__change-label'>
			<h2 className='myProfile__change-label-title'>Сертификаты</h2>
			<textarea
				placeholder='Сертификаты'
				type='text'
				{...register('certificates', {
					maxLength: {
						message: 'Максимальная длина 50 символов',
						value: 50,
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

export default MyProfileChangeCertificates
