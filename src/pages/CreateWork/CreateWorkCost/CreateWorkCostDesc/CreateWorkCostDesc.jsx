import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const CreateWorkCostDesc = ({ register, error }) => {
	return (
		<label className='createWork__label'>
			<h3 className='createWork__label-title'>Описание пакета</h3>
			<textarea
				placeholder='Описание пакета'
				type='text'
				{...register('desc', {
					required: {
						value: true,
						message: 'Введите описание пакета',
					},
					maxLength: {
						message: 'Максимальная длина 100 символов',
						value: 100,
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

export default CreateWorkCostDesc
