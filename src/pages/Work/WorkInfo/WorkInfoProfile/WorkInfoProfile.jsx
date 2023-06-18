import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'
import defaultProfile from '../../../../assets/assetsProfile/defaultProfile.jpg'
import StarRating from '../../../../components/StarRating/StarRating'
import { useGetProfileQuery } from '../../../../redux/reducers/api/profile'
import { useNavigate } from 'react-router-dom'

const WorkInfoProfile = ({ creator }) => {
	const { data = {}, isLoading } = useGetProfileQuery(creator)
	const nav = useNavigate()
	const { photo, name, surname, dealCount, grade, reviewsCount } = data
	if (isLoading) {
		return (
			<Box padding='6' boxShadow='lg' bg='white'>
				<SkeletonCircle size='10' />
				<SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
			</Box>
		)
	}
	return (
		<div className='work__aside-profile'>
			<img
				src={photo ? `${process.env.REACT_APP_URL}${photo}` : defaultProfile}
				alt='profile'
				className='work__aside-profile-avatar'
				onClick={()=>nav(`/myprofile/${creator}`)}
			/>
			<div className='work__aside-profile-info'>
				<h3 className='work__aside-profile-name'>
					{name} {surname}
				</h3>{' '}
				<p className='work__aside-profile-deal'>Закрыто сделок: {dealCount}</p>
				<div className='work__aside-profile-grade'>
					<StarRating grade={grade} />
					<p className='work__aside-profile-reviews'>{reviewsCount} отзывов</p>
				</div>
			</div>
		</div>
	)
}

export default WorkInfoProfile
