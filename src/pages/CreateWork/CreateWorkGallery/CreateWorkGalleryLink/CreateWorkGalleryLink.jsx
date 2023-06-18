import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const CreateWorkGalleryLink = ({ register, error }) => {
	return (
		<label className='createWork__label'>
			<h3 className='createWork__label-title'>Ссылка на видео Youtube</h3>
			<input
				placeholder='Введите ссылку'
				type='text'
				{...register('link', {
					validate: v => {
						if (!v.includes('https://www.youtube.com') && v.length) {
							return 'Введите ссылку на Youtube'
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

export default CreateWorkGalleryLink
