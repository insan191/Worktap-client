import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const CreateWorkCostCount = ({ register, error }) => {
	return (
		<label className='createWork__label'>
			<h3 className='createWork__label-title'>Количество доработок</h3>
			<input
				placeholder='Количество доработок'
				type='number'
				{...register('count', {
					validate: v => {
						if (v < 0) {
							return 'Нельзя указывать отрицательное число'
						}
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

export default CreateWorkCostCount
