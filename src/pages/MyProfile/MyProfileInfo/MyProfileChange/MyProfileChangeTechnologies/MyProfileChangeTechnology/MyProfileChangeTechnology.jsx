import { CloseButton } from '@chakra-ui/react'
import React from 'react'

const MyProfileChangeTechnology = ({
	technology,
	setTechnologies,
	technologies,
	_id,
}) => {
	const deleteTechnology = () => {
		setTechnologies(technologies.filter(({ id }) => id !== _id))
	}
	return (
		<div className='myProfile__change-technologies-item'>
			<span className='myProfile__change-technologies-item-text'>
				{technology}
			</span>
			<span onClick={deleteTechnology}>
				<CloseButton size='sm' />
			</span>
		</div>
	)
}

export default MyProfileChangeTechnology
