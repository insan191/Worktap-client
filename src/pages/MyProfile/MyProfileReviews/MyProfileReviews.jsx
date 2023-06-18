import React, { useState } from 'react'
import './MyProfileReviews.scss'
import MyProfileReviewsCard from './MyProfileReviewsCard/MyProfileReviewsCard'
const MyProfileReviews = () => {
	const [tab, setTab] = useState('positive')
	const data = [1, 2, 3, 4, 5, 6,7]
	const arrReviews = [...data].reverse().slice(0,6)
	return (
		<div className='myProfile__reviews'>
			<div className='container'>
				<div className='myProfile__reviews-content'>
					<h2 className='myProfile__reviews-title'>Отзывы</h2>
					<div className='myProfile__reviews-tab'>
						<button
							className={`myProfile__reviews-tab-btn ${
								tab === 'positive' && 'active'
							}`}
							onClick={() => setTab('positive')}
						>
							Положительные (65)
						</button>
						<button
							className={`myProfile__reviews-tab-btn ${
								tab === 'negative' && 'active'
							}`}
							onClick={() => setTab('negative')}
						>
							Отрицательные(10)
						</button>
					</div>
					<div className='myProfile__reviews-row'>
						{arrReviews.map(item => (
							<MyProfileReviewsCard key={item} />
						))}
					</div>
					{data.length > 5 && (
						<div className='myProfile__reviews-more'>
							<button className='myProfile__reviews-more-btn'>
								Загрузить еще
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default MyProfileReviews
