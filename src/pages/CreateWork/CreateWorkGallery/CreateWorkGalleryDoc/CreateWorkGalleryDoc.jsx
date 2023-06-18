import React, { useRef } from 'react'
import { AiOutlineFileText } from 'react-icons/ai'
import {
	BsFillFileEarmarkArrowDownFill,
	BsFillFileEarmarkArrowUpFill,
} from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'
import axios from '../../../../utils/axios.js'
import { textLengthLimit } from '../../../../utils/textLengthLimit.js'
const CreateWorkGalleryDoc = ({ setDocs, docs }) => {
	const doc = useRef()
	const handleDoc = async e => {
		try {
			const formData = new FormData()
			const file = e.target.files[0]
			formData.append('doc', file)
			await axios
				.post('/upload', formData)
				.then(({ data }) =>
					setDocs([...docs, { title: data.url, id: uuidv4() }])
				)
		} catch (error) {
			console.log(error)
			alert('Ошибка при загрузке файла')
		}
	}
	return (
		<div className='createWork__gallery-doc'>
			<div
				className='createWork__gallery-doc-upload'
				onClick={() => doc.current.click()}
			>
				<BsFillFileEarmarkArrowUpFill fill='#FBA457' size='70px' />
				<span className='createWork__gallery-doc-upload-text'>
					Загрузить
				</span>
			</div>
			<input
				type='file'
				hidden
				id='doc'
				// accept='image/jpeg, image/png, image/jpg'
				ref={doc}
				onChange={handleDoc}
			/>
			<div className='createWork__gallery-doc-files'>
				{docs.map(item => (
					<div key={item.title} className='createWork__gallery-doc-files-item'>
						<div className='createWork__gallery-doc-files-item-left'>
							<AiOutlineFileText fill='#909399' size='16px' />
							<span className='createWork__gallery-doc-files-item-text'>
								{textLengthLimit(item.title, 25)}
							</span>
						</div>
						<BsFillFileEarmarkArrowDownFill size='20px' fill='#656084' />
					</div>
				))}
			</div>
		</div>
	)
}

export default CreateWorkGalleryDoc
