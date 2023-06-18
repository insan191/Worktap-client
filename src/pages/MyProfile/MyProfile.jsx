import React from 'react'
import './MyProfile.scss'
import MyProfileInfo from './MyProfileInfo/MyProfileInfo'
import MyProfileReviews from './MyProfileReviews/MyProfileReviews'
import MyProfileWorks from './MyProfileWorks/MyProfileWorks'
const MyProfile = () => {
	return (
		<div className='myProfile'>
			<MyProfileInfo />
			<MyProfileWorks />
			<MyProfileReviews />
		</div>
	)
}

export default MyProfile
