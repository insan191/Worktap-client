import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import CreateWorkGalleryDoc from './CreateWorkGalleryDoc/CreateWorkGalleryDoc'
import CreateWorkGalleryLink from './CreateWorkGalleryLink/CreateWorkGalleryLink'

import CreateWorkGalleryPhotos from './CreateWorkGalleryPhotos/CreateWorkGalleryPhotos'

const CreateWorkGallery = ({ setPublication, setPage, publication }) => {
	const {
		gallery: { link },
	} = publication
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			link,
		},
	})
	const [docs, setDocs] = useState([])
	const [photos, setPhotos] = useState([])
	const handleCreateWork = data => {
		const gallery = { ...data, docs, photos }
		setPublication({ ...publication, gallery })
		setPage('createWorkPublication')
	}
	return (
		<form
			className='createWork__gallery'
			onSubmit={handleSubmit(handleCreateWork)}
		>
			<div className='createWork__gallery-block'>
				<h2 className='createWork__gallery-title'>Создайте свою галерею</h2>
				<h3 className='createWork__gallery-subtitle'>
					Добавьте запоминающийся контент в свою галерею, чтобы выделиться среди
					конкурентов.
				</h3>
			</div>
			<div className='createWork__gallery-block'>
				<h2 className='createWork__gallery-title'>Фотографии ворка</h2>
				<h3 className='createWork__gallery-subtitle'>
					Загрузите фотографии, которые описывают или имеют отношение к вашему
					ворку. Только файлы с расширением png, jpg, jpeg.
				</h3>
				<CreateWorkGalleryPhotos setPhotos={setPhotos} photos={photos} />
				<CreateWorkGalleryLink error={errors.link} register={register} />
			</div>
			<div className='createWork__gallery-block'>
				<h2 className='createWork__gallery-title'>Документы ворка</h2>
				<h3 className='createWork__gallery-subtitle'>
					Мы рекомендуем добавлять файл документа только в том случае, если он
					дополнительно разъясняет услугу, которую вы будете предоставлять.
				</h3>
				<CreateWorkGalleryDoc docs={docs} setDocs={setDocs} />
			</div>
			<div className='createWork__navButtons'>
				<button
					className='createWork__navButtons-prev'
					onClick={() => setPage('createWorkRequirements')}
				>
					Назад
				</button>
				<button className='createWork__navButtons-next' type='submit'>
					Дальше
				</button>
			</div>
		</form>
	)
}

export default CreateWorkGallery
