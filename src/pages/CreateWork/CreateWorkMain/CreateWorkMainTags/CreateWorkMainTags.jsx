import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const CreateWorkMainTags = ({ register, error, getValues }) => {
	return (
		<label className='createWork__label'>
			<h3 className='createWork__label-title'>Подкатегория</h3>
			<input type='text'/>
			<span className='createWork__error'>
				{error && <BiErrorCircle fill='#ED1B2E' />}
				<span className='createWork__error-text'>{error && error.message}</span>
			</span>
		</label>
	)
}

export default CreateWorkMainTags
