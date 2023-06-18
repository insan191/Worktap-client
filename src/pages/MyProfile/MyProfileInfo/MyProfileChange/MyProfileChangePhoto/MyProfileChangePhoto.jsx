import React, { useRef } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import axios from '../../../../../utils/axios.js'

const MyProfileChangePhoto = ({ setPhoto, photo }) => {
	const image = useRef()
	const handleImage = async e => {
		try {
			const formData = new FormData()
			const file = e.target.files[0]
			formData.append('image', file)
			await axios
				.post('/upload', formData)
				.then(({ data: { url } }) => setPhoto(url))
		} catch (error) {
			console.log(error)
			alert('Ошибка при загрузке файла')
		}
	}

	return (
		<div className='myProfile__change-photo'>
			<h2 className='myProfile__change-photo-title'>Фотография</h2>
			<img
				className='myProfile__change-photo-img'
				src={`${process.env.REACT_APP_URL}${photo}`}
				alt=''
			/>
			<div
				className='myProfile__change-photo-add'
				onClick={() => image.current.click()}
			>
				<IoMdAddCircle fill='#FBA457' size='50px' />
				<span className='myProfile__change-photo-add-text'>Добавить фото</span>
			</div>
			<input
				type='file'
				hidden
				id='image'
				accept='image/jpeg, image/png, image/jpg'
				ref={image}
				onChange={handleImage}
			/>
		</div>
	)
}

export default MyProfileChangePhoto
