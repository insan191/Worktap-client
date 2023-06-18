import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from '../../redux/reselect'
import './CreateWork.scss'
import CreateWorkCost from './CreateWorkCost/CreateWorkCost'
import CreateWorkDescription from './CreateWorkDescription/CreateWorkDescription'
import CreateWorkGallery from './CreateWorkGallery/CreateWorkGallery'
import CreateWorkMain from './CreateWorkMain/CreateWorkMain'
import CreateWorkNav from './CreateWorkNav/CreateWorkNav'
import CreateWorkPublication from './CreateWorkPublication/CreateWorkPublication'
import CreateWorkRequirements from './CreateWorkRequirements/CreateWorkRequirements'

const CreateWork = () => {
	const {
		user: { _id },
	} = useSelector(userSelector)
	const [publication, setPublication] = useState({
		creator: _id,
		main: {
			title: '',
			category: 'texts-and-translations',
			subcategory: 'posts-for-sn',
		},
		description: {
			desc: '',
			questions: [],
		},
		requirements: '',
		packet: {
			standard: {},
			economy: {},
			business: {},
		},
		gallery: {
			link: '',
			docs: [],
			photos: [],
		},
	})
	const [page, setPage] = useState('createWorkMain')
	const pageArr = [
		{
			text: 'Основные',
			value: 'createWorkMain',
		},
		{
			text: 'Стоимость и опции',
			value: 'createWorkCost',
		},
		{ text: 'Описание', value: 'createWorkDescription' },
		{ text: 'Требования', value: 'createWorkRequirements' },
		{ text: 'Галерея', value: 'createWorkGallery' },
		{ text: 'Публикация', value: 'createWorkPublication' },
	]
	return (
		<div className='createWork'>
			<div className='container'>
				<div className='createWork__content'>
					<CreateWorkNav pageArr={pageArr} page={page} />
					<div className='createWork__page'>
						{page === 'createWorkMain' ? (
							<CreateWorkMain
								setPage={setPage}
								setPublication={setPublication}
								publication={publication}
							/>
						) : page === 'createWorkCost' ? (
							<CreateWorkCost
								setPage={setPage}
								setPublication={setPublication}
								publication={publication}
							/>
						) : page === 'createWorkDescription' ? (
							<CreateWorkDescription
								setPage={setPage}
								setPublication={setPublication}
								publication={publication}
							/>
						) : page === 'createWorkRequirements' ? (
							<CreateWorkRequirements
								setPage={setPage}
								setPublication={setPublication}
								publication={publication}
							/>
						) : page === 'createWorkGallery' ? (
							<CreateWorkGallery
								setPage={setPage}
								setPublication={setPublication}
								publication={publication}
							/>
						) : page === 'createWorkPublication' ? (
							<CreateWorkPublication
								publication={publication}
								setPage={setPage}
							/>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateWork
