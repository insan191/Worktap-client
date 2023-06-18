import React, { useState } from 'react'
import { GiPlainCircle } from 'react-icons/gi'
import { IoIosArrowDown } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import circle1 from '../../../assets/assetsMyProfile/1.png'
import circle2 from '../../../assets/assetsMyProfile/2.png'
import net from '../../../assets/assetsMyProfile/3.png'
import waves from '../../../assets/assetsMyProfile/4.png'
import defaultProfile from '../../../assets/assetsProfile/defaultProfile.jpg'
import StarRating from '../../../components/StarRating/StarRating'
import { useGetProfileQuery } from '../../../redux/reducers/api/profile'
import { userSelector } from '../../../redux/reselect'
import MyProfileChange from './MyProfileChange/MyProfileChange'
import './MyProfileInfo.scss'
import MyProfilePopover from './MyProfilePopover/MyProfilePopover'
const MyProfileInfo = () => {
	const params = useParams()
	const {
		user: { _id },
	} = useSelector(userSelector)
	const { data = {} } = useGetProfileQuery(params.id)
	const { name, surname, profession, description, technologies, photo } = data
	const [showPopover, setShowPopover] = useState(false)
	const handleClick = () => {
		setShowPopover(prev => !prev)
	}
	return (
		<div className='myProfile__info'>
			<div className='container'>
				<div className='myProfile__info-content'>
					<div className='myProfile__info-left'>
						<h3 className='myProfile__info-profession'>{profession}</h3>
						<h2 className='myProfile__info-name'>
							<span className='greenText'>{name}</span> {surname}
						</h2>
						<p className='myProfile__info-description'>{description}</p>
						<div className='myProfile__info-technologies'>
							{technologies &&
								technologies.map(({ id, technology }) => (
									<span key={id} className='myProfile__info-technology'>
										{technology}
									</span>
								))}
						</div>
						<div className='myProfile__info-more'>
							<button
								className='myProfile__info-more-trigger'
								onClick={handleClick}
							>
								<span className='myProfile__info-more-trigger-text'>
									{showPopover ? 'Скрыть ' : 'Показать '}
									подробную информацию
								</span>
								<span
									className={`myProfile__info-more-trigger-arrow ${
										showPopover && 'active'
									}`}
								>
									<IoIosArrowDown size='16px' />
								</span>
							</button>
							{showPopover && <MyProfilePopover data={data} />}
						</div>
					</div>
					<div className='myProfile__info-right'>
						<div className='myProfile__info-right-group'>
							<img
								src={circle1}
								alt='circle'
								className='myProfile__info-right-circle1'
							/>
							{params.id === _id && <MyProfileChange user={data} />}

							<img
								src={
									photo
										? `${process.env.REACT_APP_URL}${photo}`
										: defaultProfile
								}
								alt='avatar'
								className='myProfile__info-right-avatar'
							/>
							<div className='myProfile__info-right-grade'>
								<StarRating />
							</div>
							<img
								src={circle2}
								alt='circle'
								className='myProfile__info-right-circle2'
							/>
							<img src={net} alt='net' className='myProfile__info-right-net' />
							<img
								src={waves}
								alt='waves'
								className='myProfile__info-right-waves'
							/>
							<div className='myProfile__info-right-status'>
								<GiPlainCircle size='7px' fill='#1dbf73' />
								<p className='myProfile__info-right-status-text'>В сети</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyProfileInfo
