import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import MyProfileChangeTechnology from './MyProfileChangeTechnology/MyProfileChangeTechnology'

const MyProfileChangeTechnologies = ({ technologies, setTechnologies }) => {
	const [field, setField] = useState('')
	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			setTechnologies([...technologies, { technology: field, id: uuidv4() }])
			setField('')
		}
	}
	return (
		<div className='myProfile__change-technologies'>
			<h2 className='myProfile__change-technologies-title'>Технологии</h2>
			<div className='myProfile__change-technologies-row'>
				{technologies.map(({ id, technology }) => (
					<MyProfileChangeTechnology
						technology={technology}
						setTechnologies={setTechnologies}
						technologies={technologies}
						_id={id}
						key={id}
					/>
				))}
			</div>
			<input
				onKeyDown={handleKeyDown}
				onChange={e => setField(e.target.value)}
				value={field}
				type='text'
				className='myProfile__change-field'
				placeholder='На каких технологиях вы работаете?'
			/>
		</div>
	)
}

export default MyProfileChangeTechnologies
