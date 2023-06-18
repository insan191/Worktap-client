import React, { useState } from 'react'
import './StarRating.scss'
const StarRating = () => {
	const [ratings, setRatings] = useState([])
	const [hover, setHover] = useState(0)
	const handleRating = value => {
		setRatings([...ratings, value])
	}

	const averageRating =
		ratings.reduce((total, rating) => total + rating, 0) / ratings.length

	return (
		<div className='grade'>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1
				return (
					<label key={i}>
						<input
							type='radio'
							hidden
							name='rating'
							value={ratingValue}
							onClick={() => handleRating(ratingValue)}
						/>
						<svg
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(0)}
							className='grade__star'
							viewBox='0 0 24 24'
							fill={
								ratingValue <= (hover || averageRating) ? '#ffc107' : '#e4e5e9'
							}
						>
							<path d='M12 .3l3.09 6.3 6.91.99-5 4.86 1.18 6.88L12 17.25l-6.09 3.03 1.18-6.88-5-4.86 6.91-.99L12 .3z' />
						</svg>
					</label>
				)
			})}
			{/* <p>The average rating is {averageRating.toFixed(1)}.</p> */}
		</div>
	)
}

export default StarRating
