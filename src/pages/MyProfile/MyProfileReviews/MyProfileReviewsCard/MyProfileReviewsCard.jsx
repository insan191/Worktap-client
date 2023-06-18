import React from 'react'
import StarRating from '../../../../components/StarRating/StarRating'
const MyProfileReviewsCard = () => {
	return (
		<div className='myProfile__reviews-card'>
			<div className='myProfile__reviews-card-top'>
				<img
					src='https://bit.ly/dan-abramov'
					alt=''
					className='myProfile__reviews-card-avatar'
				/>
				<div className='myProfile__reviews-card-info'>
					<p className='myProfile__reviews-card-name'>Никита Евреев</p>
					<StarRating />
				</div>
			</div>
			<p className='myProfile__reviews-card-text'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
				tincidunt eget eu, eget commodo condimentum non, fringilla fermentum.
				Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus
				orci dignissim in lectus nulla.
			</p>
		</div>
	)
}

export default MyProfileReviewsCard
