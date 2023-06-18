import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const RegisterPasswordAgain = ({ register, error, getValues }) => {
	return (
		<label className='register__label'>
			<h2 className='register__label-title'>Повторите пароль</h2>
			<input
				type='password'
				className={
					error ? 'register__field error' : 'register__field'
				}
				placeholder='Пароль'
				{...register('passwordAgain', {
					required: {
						message: 'Ваши пароли не совпадают',
						value: true,
					},
					validate: v => {
						if (getValues('password') !== v) {
							return 'Ваши пароли не совпадают'
						}
					},
				})}
			/>
			<span className='register__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='register__error-text'>
					{error && error.message}
				</span>
			</span>
		</label>
	)
}

export default RegisterPasswordAgain
