import React, { useRef } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'
import axios from '../../../../utils/axios.js'

const CreateWorkGalleryPhotos = ({ setPhotos, photos }) => {
	const image = useRef()
	const handleImage = async e => {
		try {
			const formData = new FormData()
			const file = e.target.files[0]
			formData.append('image', file)
			await axios
				.post('/upload', formData)
				.then(({ data }) =>
					setPhotos([...photos, { url: data.url, id: uuidv4() }])
				)
		} catch (error) {
			console.log(error)
			alert('Ошибка при загрузке файла')
		}
	}
	return (
		<div className='createWork__gallery-photos'>
			<Swiper
				spaceBetween={30}
				slidesPerView={3}
				navigation
				modules={[Navigation]}
			>
				<SwiperSlide>
					<div
						className='createWork__gallery-photos-item'
						onClick={() => image.current.click()}
					>
						<IoMdAddCircle fill='#FBA457' size='70px' />
						<span className='createWork__gallery-photos-item-text'>
							Добавить фото
						</span>
					</div>
					<input
						type='file'
						hidden
						id='image'
						accept='image/jpeg, image/png, image/jpg'
						ref={image}
						onChange={handleImage}
					/>
				</SwiperSlide>
				{photos.map(item => (
					<SwiperSlide key={item.id}>
						<img
							className='createWork__gallery-photos-item'
							src={`${process.env.REACT_APP_URL}${item.url}`}
							alt={item.id}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default CreateWorkGalleryPhotos
